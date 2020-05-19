import React from 'react';
import Goal from './Goal';

const GoalsList = props => {
  const { goals }  = this.props; 

  const GoalsList = props.goals.map(goal => <li><Goal key={goal.id} {...goal} deleteGoal={props.deleteGoal}/></li>)
    return (
      <ol>	  
        {goalsList}
      </ol>
    );
  }