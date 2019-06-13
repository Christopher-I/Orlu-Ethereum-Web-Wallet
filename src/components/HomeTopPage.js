import React from 'react';
import {Button,Container, Header, Menu, Responsive, Segment, Visibility} from 'semantic-ui-react';
import SignInBox from './SignInBox';


export default class TopPage extends React.Component{

	render(){
		return(
	<Responsive getWidth={this.props.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={'top'}
              inverted
              pointing
              secondary
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Wallet</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  
                 {/* <Button as='a' inverted style={{ marginLeft: '0.5em' }}
                  onClick={this.handleSignIn }>
                    Sign Up
                  </Button>*/}

                </Menu.Item>

              </Container>
		            </Menu>
		                  <Container text>
		            <Header
		              as='h1'
		              content='Orlu'
		              inverted
		              style={{
		                fontSize: this.props.mobile ? '2em' : '4em',
		                fontWeight: 'normal',
		                marginBottom: 0,
		                marginTop: this.props.mobile ? '1.5em' : '3em',
		              }}
		            />
		            <Header
		              as='h4'
		              content='Easy to use crypto-currency web wallet.'
		              style={{
		                color:'grey',
		                fontSize: this.props.mobile ? '1.5em' : '1.7em',
		                fontWeight: 'normal',
		                marginTop: this.props.mobile ? '0.5em' : '0.5em',
		              }}
		            />

		            <SignInBox/>
  				</Container>


          </Segment>
        </Visibility>

      
      </Responsive>
			)
}
}