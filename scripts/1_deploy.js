async function main() {
  console.log('Preparing deployment... \n')
  // Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")
  const Exchange = await ethers.getContractFactory("Exchange")

  // Fetch accounts
  const accounts = await ethers.getSigners();
  console.log(`Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n`)


  // Deploy contracts
  const noah = await Token.deploy("Noah", 'NOAH', "1000000")
  await noah.deployed()
  let symbol = await noah.symbol()
  console.log(symbol)
  console.log(`NOAH Deployed to: ${noah.address}`)

  const c00 = await Token.deploy('OxyDjinn', 'COO', '1000000')
  await c00.deployed()
  console.log(`COO Deployed to: ${c00.address}`)

  const doge = await Token.deploy('Dogecoin', 'DOGE', '1000000')
  await doge.deployed()
  console.log(`DOGE Deployed to: ${doge.address}`)

  const exchange = await Exchange.deploy(accounts[1].address, 10)
  await exchange.deployed()
  console.log(`Exchange Deployed to: ${exchange.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
