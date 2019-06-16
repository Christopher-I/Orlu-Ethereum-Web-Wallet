import Web3 from 'web3';

export async function getGasEstimate (ks,provider){
		const web3 = new Web3(provider);

	    return await web3.eth.estimateGas({
        from: ks.getAddresses()[0],
        to: ks.getAddresses()[1],
        value: web3.utils.toHex(web3.utils.toWei("0.0001", "ether")),
      }).then(console.log); 

}

export async function getAccountBalance (ks,provider){
    const web3 = new Web3(provider);
    let balance = await web3.eth.getBalance(ks.getAddresses()[0])
    console.log(balance)
    balance = web3.utils.fromWei(balance, "ether")
    balance = (JSON.parse(balance)).toFixed(3);
		
  return balance; 

}

export async function sendTransaction (amount, ks,provider){
    const web3 = new Web3(provider);

    return await web3.eth.sendTransaction({
        from: ks.getAddresses()[0],
        to: ks.getAddresses()[1],
        gas: 30000,
        value: web3.utils.toHex(web3.utils.toWei(amount, "ether")),
      }, function(err,result){
          console.log(result);
    })  

}