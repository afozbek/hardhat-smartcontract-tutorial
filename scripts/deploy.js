const hre = require("hardhat");

async function main() {
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();

  await helloWorld.deployed();

  console.log({ helloWorld });
  console.log("HelloWorld deployed to:", helloWorld.address);
  console.log("HelloWorld provider:", helloWorld.provider);
  console.log("HelloWorld tx:", helloWorld.deployTransaction.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
