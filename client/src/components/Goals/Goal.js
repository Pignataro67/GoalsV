import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import ObjectivesContainer from '../../containers/ObjectivesContainer';

class Goal extends React.Component { 

  render() {
    const {aim, strategy, category, objectives, goal } = this.props;
    return(
      <div className="goal">
        <h3>{aim}</h3>
        <strong>Strategy:</strong>
          <p>{strategy}</p>
        <strong>Category:</strong>
            <p>{category}</p>
        <Button basic color='red' size='mini' onClick={ () => this.props.deleteGoal(this.props.id)}>Delete</Button>
        <p><ObjectivesContainer goal={goal} objectives={objectives} /></p>
      </div>
    );
  }
}

export default Goal;