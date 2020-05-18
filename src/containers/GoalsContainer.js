import React, { Component } from 'react';
import AddGoal from '../components/Goals/AddGoal';
import GoalsList from '../components/Goals/GoalsList';
import GoalInput from '../components/Goals/GoalInput';
import { connect } from 'react-redux';
import { fetchGoals } from  '../actions/goalsActions';

class GoalsContainer extends Component {

  componentDidMount() {
    this.props.fetchGoals()
  }

  render() {
    return (
      <div>
        <GoalsList goals={this.props.goals} />  <GoalsList goals={this.props.goals} /> 
        <GoalInput />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals.goals
  }
}

export default connect(mapStateToProps, { fetchGoals })(GoalsContainer);