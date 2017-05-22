import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadLine: ''
    }
  }

  changeDeadLine()
  {
    this.setState({deadline: this.state.newDeadLine});
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl className="Deadline-Input" placeholder='new date' onChange={event => this.setState({newDeadLine: event.target.value})} />
          <Button onClick={() => this.changeDeadLine()}>Change Date</Button>
        </Form>
      </div>
      )
  }
}

export default App;
