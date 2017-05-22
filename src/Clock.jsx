import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num)
  {
    if (num > 0 && num < 10)
    {
      return '0' + num;
    }
    return num;
  }
  getTimeUntil(deadline)
  {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor((time/1000/60/60)%24);
    const days = Math.floor((time/1000/60/60/24));
    this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
  }
  render() {
    return(
    <div>
      <div className="Clock-Days">{this.leading0(this.state.days)} Days</div>
      <div className="Clock-Hours">{this.leading0(this.state.hours)} Hours</div>
      <div className="Clock-Minutes">{this.leading0(this.state.minutes)} Minutes</div>
      <div className="Clock-Seconds">{this.leading0(this.state.seconds)} Seconds</div>
    </div>
  )
  }
}

export default Clock;
