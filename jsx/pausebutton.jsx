const React = require('react');

class PauseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "Pause",
      timeLeft: this.props.timeLeft
    };
    this.pauseTimer = this.pauseTimer.bind(this);
  }
  pauseTimer(ev) {
    if( this.state.action === "Pause" ) {
      this.setState({ action: "Resume"});
    } else {
      this.setState({ action: "Pause"});
    }
    return this.props.pauseTimer(this.props.timeLeft, this.state.action);
  }
  render() {
    return ( this.props.timeLeft == null || this.props.timeLeft == 0 ) ?
    <div/> : <button
      onClick={this.pauseTimer}
      > {this.state.action} </button>
  }
}

module.exports = PauseButton;
