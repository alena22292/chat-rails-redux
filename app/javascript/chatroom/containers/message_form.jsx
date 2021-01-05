import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    // alert('Your message is: ' + this.state.value);
    event.preventDefault();
    this.props.createMessage(this.props.channel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="channel-editor">
          <input
            ref={(input) => { this.messageBox = input; }}
            type="text"
            value={this.state.value}
            className="form-control"
            autoComplete="off"
            onChange={this.handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
