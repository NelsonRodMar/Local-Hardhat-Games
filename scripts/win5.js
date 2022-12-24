// add the game address here and update the contract name if necessary
const gameAddr = "";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx = await game.giveMeAllowance(10001);
    await tx.wait();
    const tx2 = await game.mint(10001);
    await tx2.wait();


    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const tx3 = await game.win();
    const receipt = await tx3.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
