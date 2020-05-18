import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import GoalInput from './components/Goals/GoalInput';
import GoalsContainer from './containers/GoalsContainer';
//Semantic-Ui-Components
import { Container, Header } from 'semantic-ui-react';

class App extends Component {
  render() {	 
  return (
    <Container>
    <Header as='h1' className="main-header">Goals</Header>
      <Header as='h3'className="tagline">TagLine here</Header>
      <NavBar />
        <div>
          <Container>
            <Route exact path='/' render={Home} />
            <Route exact path='/goals/new' component={GoalInput} />
            <Route exact path='/goals' component={GoalsContainer} />
          </Container>
        </div>
    </Container>
    );
  }
}

export default App;