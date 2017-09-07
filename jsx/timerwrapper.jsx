const React = require('react');

const Timer = require('./timer.jsx');
const Button = require('./button.jsx');
const PauseButton = require('./pausebutton.jsx');
const Input = require('./input.jsx');

class TimerWrapper extends React.Component {
  constructor() {
    super();
    this.state =  {timeLeft: null, timer: null};
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }
  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      if( this.state.timeLeft != 0 ) {
        var timeLeft = ( this.state.timeLeft == 0 ) ? 0 : this.state.timeLeft - 1;
        if (timeLeft == 0) {
          clearInterval(timer);
        }
        this.setState({timeLeft: timeLeft});
      }
    }, 1000);

    return this.setState({timeLeft: timeLeft,
      timer: timer});
  }
  pauseTimer(timeLeft, action) {
    if( action === "Pause" ) {
      clearInterval(this.state.timer);
    } else {
      this.startTimer(this.state.timeLeft);
    }
  }
  render() {
    return (
      <div className="row-fluid">
        <h2 className="text-primary">Timer</h2>
        <div className="btn-group" role="group" >
          <Button time="5" startTimer={this.startTimer}/>
          <Button time="10" startTimer={this.startTimer}/>
          <Button time="15" startTimer={this.startTimer}/>
        </div>
        <Input startTimer={this.startTimer}/>
        <Timer timeLeft={this.state.timeLeft}/>
        <PauseButton timeLeft={this.state.timeLeft} pauseTimer={this.pauseTimer}/>
      </div>
    );
  }
}

module.exports = TimerWrapper;
