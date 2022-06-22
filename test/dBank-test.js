const { expect, assert } = require('chai');
const { ethers } = require('hardhat');

describe('dBank opening account testing', () => {
    let DbankFactory;
    let dBank;
    beforeEach(async () => {
        DbankFactory = await ethers.getContractFactory('dBank');
        dBank = await DbankFactory.deploy();

    });

    it('should return balance of an account.', async function () {
        await dBank.deployed();

        await dBank.openAccount('Test', "98554444433");
        const balance = await dBank.balance();

        assert.equal(balance, 0);

    });
});