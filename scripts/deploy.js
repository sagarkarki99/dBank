const hrm = require('hardhat');

async function main() {
    const dBank = await deployContract();
    console.log('Contract deploying...');
    const contract = await dBank.deployed();
    console.log(`Contract deployed.Trnx hash:${dBank.address}`);
    console.log("Waiting block confirmation for contract verification...");
    await dBank.deployTransaction.wait(5);

    await verifyContract(dBank.address);
}

async function deployContract() {
    const DbankFactory = await hrm.ethers.getContractFactory('dBank');
    const dBank = await DbankFactory.deploy();
    return dBank;
}

async function verifyContract(address) {
    console.log("Verifying contract...");
    try {
        await hrm.run("verify:verify", {
            address: address,
            constructorArguments: [],
        });
        console.log("Contract verified successfully!");
    } catch (error) {
        console.log("Contract verification Failed!");
    }


}

main().then(() => process.exit(0)).catch((err) => {
    console.log(err);
    process.exit(1);
});