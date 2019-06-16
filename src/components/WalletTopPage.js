import React from 'react';
import {Button,Container, Header,Input,List,Icon,Grid, Menu,Feed,Card,Image, Responsive, Segment, Visibility} from 'semantic-ui-react';
import SignInBox from './SignInBox';
import LogInBox from './LogInBox';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WalletPage from '../pages/WalletPage';
import store from 'store';
import getProvider from '../web3/getProvider';
import {getAccountBalance, getGasEstimate, sendTransaction} from '../web3/web3Calls';
import SignerProvider from 'ethjs-provider-signer';
import keystore from '../lightWallet/keyStore';
import {connect} from 'react-redux';
import {updateKeyStore, updateUserData} from '../redux/actions';
import Web3 from 'web3';


class WalletTopPage extends React.Component{

  state={
    user:store.get('user'),
    keystore:window.lightwallet.keystore.deserialize(store.get('user').keystore),
    gasEstimate:'',
    accountBalance:'0',
    receivingAccount:'',
    sendingAmount:'',
    ks:'',
    provider:''

  }


  async componentDidMount(){
    let ks = window.lightwallet.keystore.deserialize(this.state.user.keystore);
    const provider = getProvider(ks);

    const accountBalance = await getAccountBalance(ks,provider);

    this.setState({
      accountBalance:accountBalance,
      ks:ks,
      provider:provider
    })


  }

  onSubmit=()=>{

    console.log(sendTransaction(this.state.sendingAmount, this.state.ks,this.state.provider))


  }



	render(){
    console.log(this.props)

		return(
	<Responsive getWidth={this.props.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Container>
    {/* Heads up! We apply there some custom styling, you usually will not need it. */}
    <style>{`
      html, body {
        background-color: #252839 !important;
      }
      p {
        align-content: center;
        background-color: #495285;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }
      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}
    </style>

    
            <Menu >
              <Menu.Item >
                <Header  color='grey' style={{ fontSize: '1em' }}>
                  Welcome { this.state.user.firstName }!
                  </Header>
                </Menu.Item>

                <Menu.Item position='right' style={{ marginRight:'-700px' }}>
                <Header   color='grey' style={{  fontSize: '1em' }}>
                <Icon name='setting' />
                  Options
                  </Header>
                </Menu.Item>

              <Menu.Item position='right'>
                  <Button secondary>
                  Log Out
                  </Button>
                </Menu.Item>


                </Menu>


        <List horizontal>
          <List.Item>
       
                  <a style={{ color:'white', marginLeft:'210px', fontSize: '1.1em' }}>
                  Account Number: { this.state.keystore.getAddresses()[0]}
                  </a>
         
          </List.Item>
          <List.Item>
       
                  <a  style={{ color:'white', fontSize: '1.1em'  }}>
                  Account Balance: 
                  </a>
                  <a style={{ color:'green', fontSize: '1.15em'}}> 
                   { this.state.accountBalance } ETH
                  </a>
         
          </List.Item>


        </List>

                    

                <Segment style={{marginTop:'40px',marginLeft:'70px', width:'1000px', height:'600px'}}>

                  <Grid  columns='equal' stackable>
                      <Grid.Row textAlign='left'>
                    <Grid.Column style={{ paddingBottom: '15em', paddingTop: '15em' }}>

                    <Card style={{marginTop:'-210px',width:'1300px', height:'550px'}}>
                     <Card.Content>
                      <Card.Header>Choose Currency</Card.Header>

                      <List relaxed='very' selection divided verticalAlign='middle' style={{ width: '430px',marginLeft:'10px' }}>
                        <List.Item active>
                          <Image avatar src={require('../images/eth.jpg')} />
                          <List.Content>
                            <List.Header>Ethereum</List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item >
                          <Image avatar src={require('../images/maker.jpg')}  />
                          <List.Content>
                            <List.Header>Maker Dai</List.Header>
                          </List.Content>
                        </List.Item>
                      </List>
                      </Card.Content>
                      </Card>
                      </Grid.Column>



                      <Grid.Column>
                        <Card style={{width:'1300px', height:'550px'}}>
                            
                            <Card.Content>
                              <Card.Header style={{color:'grey'}}>Send Ether</Card.Header>
                              <br/>
                              <Input
                              value ={this.state.receivingAccount}
                              onChange ={(e)=>this.setState({receivingAccount:e.target.value})}
                              placeholder ="0x......"
                              label ="To: "
                              style ={{width:'443px'}}
                              />
                              <br/>
                              <br/>
                              <Input
                              value ={this.state.value}
                              onChange ={(e)=>this.setState({sendingAmount:e.target.value})}
                              placeholder ="ETH"
                              label ="Amount: "
                              style ={{width:'444px'}}
                              />
                              <br/>
                              <br/>
                              <Button onClick={this.onSubmit} floated='right' primary size='large'>
                              Send
                              </Button>
                              </Card.Content>
                            <Card.Content extra style={{marginTop:'-100px'}} >
                            <Card.Header style={{color:'grey'}}>Receive Ether</Card.Header>
                              <Card.Description style={{fontSize:'1.1em'}}>
                                Send To: {this.state.keystore.getAddresses()[0]}
                              </Card.Description>
                              <br/>
                            
                                <Icon name='user' />
                                <a style={{fontSize:'1.1em'}}>Account Balance: </a>

                                <a color='green' style={{color:'green',fontSize:'1.1em'}}>
                                 { this.state.accountBalance } ETH
                                 </a>
                              
                            </Card.Content>
                          </Card>
                          </Grid.Column>

                      </Grid.Row>

                      </Grid>
             
                </Segment>
                

      </Container>
      </Responsive>
			)
}
}

const mapStateToProps =(state)=>{
  return {keystore: state.keystore, userData:state.userData};
}

export default connect(mapStateToProps,{updateKeyStore, updateUserData})(WalletTopPage);








