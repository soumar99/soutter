const { ethers } = require("hardhat");

async function main() {
    const Soutter = await ethers.getContractFactory("Soutter");
    const soutter = await Soutter.deploy();
    console.log("soutter address:", soutter.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
})