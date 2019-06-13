import React from 'react';
import {Button, Modal, Icon, Grid, Form} from 'semantic-ui-react';
// import SeedPhraseGenerator from '../lightWallet/seedPhraseGenerator';
import keystore from '../lightWallet/keyStore';
import {connect} from 'react-redux';
import {updateKeyStore, updateUserData} from '../redux/actions';


class SignInBox extends React.Component{

  state ={
    password:''
  }


  saveKeyStore=(ks,pwDerivedKey)=>{
   // console.log(ks);
   // console.log(pwDerivedKey);
    this.props.updateKeyStore(ks);

  }

  handleSignUp =async ()=>{
    let self = this;
    let seed = window.lightwallet.keystore.generateRandomSeed();

    keystore(self,seed,this.state.password);
  }



  passwordInput=(e)=>{
    let userData = 
    this.setState({
      password:e.target.value
    })
  }



	render(){
    console.log(this.props)
		return(

          <Modal trigger={ <Button primary size='huge' style={{marginTop: this.props.mobile ? '0.5em' : '0.5em',}}>
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
                            <input placeholder='First Name' />
                          </Form.Field>
                          <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' />
                          </Form.Field>
                            <Form.Field>
                            <label>First Email</label>
                            <input placeholder='orlu@orlu.com' />
                          </Form.Field>
                          <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder='*********' value={this.state.password} onChange={this.passwordInput}/>
                            </Form.Field>
                        <Form.Field>
                          <Button secondary onClick={this.handleSignUp}> Sign Up </Button>
                          </Form.Field>
                      </Form>

                    </Grid.Column>

                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }} textAlign='center'>
                      <Button secondary size='large'> Sign Up With Google</Button>
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



