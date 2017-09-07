const React = require('react');

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.keyPressHandler = this.keyPressHandler.bind(this);
    this.state = {
      value: ''
    };
  }
  keyPressHandler(ev) {
    if( ev.which == 13 ) {
      let inputTime = this.state.value;

      ev.target.value = '';
      this.setState( { value: '' } );

      return (inputTime == '') ?
        this.props.startTimer('0') :
        this.props.startTimer(inputTime);
    } else if( [107,109,187,189].indexOf(ev.which) !== -1 ) {
      ev.target.value = '';
    } else {
      this.setState( { value: ev.target.value } );
    }
  }
  render() {
    return (
      <div>
        <h3>or enter time:</h3>
        <input type="number"
          min="0"
          placeholder="Time in seconds"
          onKeyUp={this.keyPressHandler}
          onChange={this.keyPressHandler}>
        </input>
      </div>
    );
  }
}

module.exports = Input;
