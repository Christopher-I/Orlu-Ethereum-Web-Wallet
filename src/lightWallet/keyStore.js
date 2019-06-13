export default (self, seed, password)=>{

        window.lightwallet.keystore.createVault.bind(self)({
          password: password,
          seedPhrase: seed, // Optionally provide a 12-word seed phrase
          // salt: fixture.salt,     // Optionally provide a salt.
                                     // A unique salt will be generated otherwise.
           hdPathString: "m/0'/0'/0'"    // Optional custom HD Path String
        }, function (err, ks) {
          
          

          // Some methods will require providing the `pwDerivedKey`,
          // Allowing you to only decrypt private keys on an as-needed basis.
          // You can generate that value with this convenient method:
          ks.keyFromPassword(password, function (err, pwDerivedKey) {
            if (err) throw err;
            //console.log(pwDerivedKey);
            // generate five new address/private key pairs
            // the corresponding private keys are also encrypted
            ks.generateNewAddress(pwDerivedKey, 5);
            //var addr = ks.getAddresses();
           // console.log(addr);

            ks.passwordProvider = function (callback) {
              var pw = prompt("Please enter password", "Password");
              callback(null, pw);
            };
            
            // Now set ks as transaction_signer in the hooked web3 provider
            // and you can start using web3 using the keys/addresses in ks!
     });
          self.saveKeyStore(ks);
          
});
		
}