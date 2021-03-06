/* eslint-disable node/no-unpublished-import */
import { run } from "hardhat";

const verify = async (contactAdress: string, args: any[]) => {
  console.log("verifying contract...");
  try {
    await run("verify:verify", {
      address: contactAdress,
      constructorArguments: args,
    });
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("already verified");
    } else {
      console.log(e);
    }
  }
};

export default verify;
