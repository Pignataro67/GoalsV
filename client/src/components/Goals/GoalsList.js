import React from 'react';
import Goal from './Goal';
import { Container } from 'semantic-ui-react';

const GoalsList = props => {
  const { goals }  = this.props; 

  const GoalsList = props.goals.map(goal => <Goal key={goal.id} {...goal} deleteGoal={props.deleteGoal}/>)
    return (
      <Container>	  
        {goalsList}
      </Container>
    );
  }