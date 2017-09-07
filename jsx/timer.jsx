const React = require('react');

class Timer extends React.Component {
  render() {
    if (this.props.timeLeft == 0) {
      alert("Timeout!");
    }
    if ( this.props.timeLeft === null ) {
      return <h1>Time left: 00</h1>;
    }
    return <h1>Time left: { ("0" + this.props.timeLeft).slice(-2) }</h1>;
  }
}

module.exports = Timer;
