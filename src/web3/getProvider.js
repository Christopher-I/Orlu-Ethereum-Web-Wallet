import SignerProvider from 'ethjs-provider-signer';

function getProvider(ks){

	return new SignerProvider('https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe', {
      signTransaction: ks.signTransaction.bind(ks),
        accounts: (cb) => cb(null, ks.getAddresses()[0]),
      });
}

export default getProvider;



// const provider = new HDwalletProvider('deliver kid very feature upon please tree robust common tail reward home',
// 'https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe');

//mainnet.infura.io/v3/23d058631ad8434591a823d52435af6e