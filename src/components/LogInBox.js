import React from 'react';
import {Button, Modal, Grid, Form} from 'semantic-ui-react';
import keystore from '../lightWallet/keyStore';
import {connect} from 'react-redux';
import {updateKeyStore, updateUserData} from '../redux/actions';
import Web3 from 'web3';
import store from 'store';
import getProvider from '../web3/getProvider';


class LoginBox extends React.Component{

  state ={
    firstName:'',
    lastName: '',
    email: '',
    password:'',
    pwDerivedKey:'',
    result:"",
    err:""
  }

  onSubmit=()=>{
    console.log(store.get('user'))
  }


	render(){
    console.log(this.props)
		return(

          <Modal trigger={<Button onClick={this.onSubmit} as='a' inverted> Log in </Button>}>
          <Modal.Header>Sign In Form</Modal.Header>

            <Modal.Content image>
              <Grid celled='internally' columns='equal' stackable>
       
                <Grid.Row >
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}textAlign='left'>
                        <Form>
                            <Form.Field>
                            <label>Enter Your Email Address</label>
                            <input placeholder='orlu@orlu.com' value ={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                          </Form.Field>
                          <Form.Field>
                            <label>Enter Your Password</label>
                            <input type="password" placeholder='*********' value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                            </Form.Field>
                        <Form.Field>
                          <Button secondary onClick={this.handleSignUp}> Log In </Button>
                          </Form.Field>
                      </Form>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }} textAlign='center'>
                      <Button basic color='red' size='large' style={{marginTop:'20px', width:'250px'}}> Log In With Google</Button>
                      <br/>
                      <br/>
                      <Button basic  color='blue' size='large' style={{marginTop:'13px',width:'250px'}}> Log In With BlockStack</Button>
                    </Grid.Column>
                </Grid.Row>
             </Grid>
            </Modal.Content>
          </Modal>
          )
	}
}

// const mapStateToProps =()=>{
//   return{}
// }


export default LoginBox;



