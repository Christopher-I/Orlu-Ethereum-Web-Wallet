import React from 'react';
import {Grid, Header,Segment} from 'semantic-ui-react';

class  BottomPage extends React.Component{

	render(){
		return(
	<Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>

            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "Easy to Use"
              </Header>
              <p style={{ fontSize: '1.33em' }}>Ideal for first time users</p>
            </Grid.Column>

             <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "Fast."
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Minimal Design for Fast and Easy Transactions .
              </p>
            </Grid.Column>

           <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Low Fees."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Minimal Transaction Fees.
            </p>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Segment>
			)
}
}

export default BottomPage;