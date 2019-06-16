import React from 'react';
import {Grid, Header,Segment} from 'semantic-ui-react';

class  WalletBottomPage extends React.Component{

	render(){
		return(
	<Segment inverted style={{ marginTop:'100px' ,padding: '0em', height:'100px' }} vertical>
      <Grid celled='internally' columns='equal' stackable>

        <Grid.Row textAlign='center'>

            <Grid.Column >
              <Header as='h3' color='teal' style={{ fontSize: '1.5em'}}>
                FAQ'S
              </Header>
            </Grid.Column>

             <Grid.Column >
              <Header as='h3' color='teal' style={{ fontSize: '1.5em' }}>
                GitHub.
              </Header>
            </Grid.Column>

           <Grid.Column >
            <Header as='h3' color='teal' style={{ fontSize: '1.5em' }}>
              Contact.
            </Header>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Segment>
			)
}
}

export default WalletBottomPage;