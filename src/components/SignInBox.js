import React from 'react';
import {Button, Modal, Icon, Grid, Form, Divider} from 'semantic-ui-react';
import keystore from '../lightWallet/keyStore';
import {connect} from 'react-redux';
import {updateKeyStore, updateUserData} from '../redux/actions';

import Web3 from 'web3';
import store from 'store';
import getProvider from '../web3/getProvider';
import SignerProvider from 'ethjs-provider-signer';



class SignInBox extends React.Component{

  state ={
    firstName:'',
    lastName: '',
    email: '',
    password:'',
    pwDerivedKey:'',
    result:"",
    err:"",
    modalOpen:false
  }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

  savepwDerivedKey =async(ks,pwDerivedKey)=>{
    let userData = { firstName:this.state.firstName, lastName:this.state.lasttName, email: this.state.email, keystore:ks.serialize()};
    store.set('user', userData)

    const provider = getProvider(ks);
    const web3 = new Web3(provider);
    console.log(ks.getAddresses()[0]);



    this.props.updateKeyStore(ks);
    this.props.updateUserData(userData);
    console.log(this.props);

    // Store current user
    

       this.setState({
      pwDerivedKey:pwDerivedKey,
      modalOpen:false
    })
 


    web3.eth.estimateGas({
        from: ks.getAddresses()[0],
        to: ks.getAddresses()[1],
        value: web3.utils.toHex(web3.utils.toWei("0.0001", "ether")),
      }).then(console.log);

    web3.eth.sendTransaction({
        from: ks.getAddresses()[0],
        to: ks.getAddresses()[1],
        gas: 30000,
        value: web3.utils.toHex(web3.utils.toWei("0.0001", "ether")),
      }, function(err,result){
          console.log(result);
    })   
}


  saveKeyStore=(ks,pwDerivedKey)=>{
    this.props.updateKeyStore(ks);
  }


  handleSignUp =async ()=>{
    //store.remove('user');
   // console.log(getProvider(store.get('user').keyStore));

 if(store.get('user')){

          // }else{
        let self = this;
        //let seed = window.lightwallet.keystore.generateRandomSeed();
        let seed = "deliver kid very feature upon please tree robust common tail reward home";

        keystore(self,seed,this.state.password);
     }
}



	render(){
    console.log(this.props)
		return(

          <Modal open={this.state.modalOpen} onClose={this.handleClose} trigger={ <Button onClick={this.handleOpen} primary size='huge' style={{marginTop: this.props.mobile ? '0.5em' : '0.5em',}}>
              Get Started
              <Icon name='right arrow' />
            </Button>}>
          <Modal.Header>Sign Up Form</Modal.Header>

            <Modal.Content image>
              <Grid celled='internally' columns='equal' stackable>
          
                <Grid.Row >
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}textAlign='left'>
                        <Form>
                          <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' value ={this.state.firstName} onChange={(e)=>this.setState({firstName:e.target.value})}/>
                          </Form.Field>
                          <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' value ={this.state.lastName} onChange={(e)=>this.setState({lastName:e.target.value})}/>
                          </Form.Field>
                            <Form.Field>
                            <label>Email</label>
                            <input placeholder='orlu@orlu.com' value ={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                          </Form.Field>
                          <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder='*********' value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                            </Form.Field>
                        <Form.Field>
                          <Button secondary onClick={this.handleSignUp}> Sign Up </Button>
                          </Form.Field>
                      </Form>
                    </Grid.Column>
                   
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }} textAlign='center'>
                      <Button basic color='red' size='large' style={{width:'250px'}}> Sign Up With Google</Button>
                      <br/>
                      <br/>
                      <Button basic color='blue' size='large'style={{width:'250px'}}> Sign Up With BlockStack </Button>
                    </Grid.Column>
                </Grid.Row>
             </Grid>
            </Modal.Content>
          </Modal>
          )
	}
}

const mapStateToProps =(state)=>{
  return {keystore: state.keystore, userData:state.userData};
}

export default connect(mapStateToProps,{updateKeyStore, updateUserData})(SignInBox)



