import React, { Component } from 'react';

const Goal = ({ aim, strategy, category, objectives }) => (
  <div className="Goal">
    <h3>{aim}</h3>
    <h4>{strategy}</h4>
    <h5>{category}</h5>
  </div>
)

export default Goal;