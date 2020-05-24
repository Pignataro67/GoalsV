import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react'
import { addObjective } from '../../actions/objectivesActions'

class ObjectiveInput extends Component {
  constructor() {
    super()
    this.state = {
      description: ""
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addObjective(this.state, this.props.goalId);
    this.setState({
      description: ''
    })
  }

  render() {
    return (
      <div>Objective Form</div>
    )
  }
}