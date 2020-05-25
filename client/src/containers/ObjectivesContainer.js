import React, { Component } from 'react';
import ObjectivesList from '../components/Objectives/ObjectivesList';
import ObjectiveInput from '../components/Objectives/ObjectiveInput';
// import { connect } from 'react-redux';

class ObjectivesContainer extends Component {

  render(){
    return(
      <div>
        <ObjectivesList goalId={this.props.goal.id} objectives={this.props.objectives} /> 
        <ObjectiveInput goalId={this.props.goal.id}/>
      </div>
    );
  }
}

const mapStateToProps = ({objectives}) => {
  return {objectives}
}

const mapDispatchToProps = dispatch => ({
  addObjective: (objectiveInput, goalId) => dispatch(addObjective(objectiveInput, goalId))
})

export default connect(mapStateToProps, mapDispatchToProps) (ObjectivesContainer); 