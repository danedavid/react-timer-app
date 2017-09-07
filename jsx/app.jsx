const React = require('react');
const ReactDOM = require('react-dom');

const TimerWrapper = require('./timerwrapper.jsx');

ReactDOM.render(
  <TimerWrapper/>,
  document.getElementById('timer-app')
);
