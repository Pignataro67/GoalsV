import React from 'react';
import Goal from './Goal';

export default class GoalsList extends Component {
  render(){
    const { goals }  = this.props; 

    const GoalsList = ({ goals }) => (
        <div>	
            <h3>Your Prespires to Aspire</h3> 
          <ol>	  
          {goals.map((goal) => (
            <li>  
              <Goal aim={goal.aim} aim={goal.aim} goal={goal} strategy={goal.strategy} 
            category={goal.category} objectives={goal.objectives} />
        </li> ))}
      </ol>
      </div>
    );
  }
}