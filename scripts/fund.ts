import { ethers, getNamedAccounts } from "hardhat";

async function main() {
  const { deployer } = await getNamedAccounts();
  console.log("Running under deployer: ", deployer);

  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log(
    "Found existing contract of deployer under address: ",
    fundMe.address,
    " ... now funding contract...."
  );

  const txResponse = await fundMe.fund({
    value: ethers.utils.parseEther("0.1"),
  });
  await txResponse.wait(1);
  console.log("Funded with 0.1 ETH!");
}
main()
  .then(() => {
    process.exitCode = 0;
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
    throw error;
  });
