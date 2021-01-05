import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }
  componentDidMount() {
    // this.refresher = setInterval(this.fetchMessages, 5000);
  }
  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }
  componentWillUnmount() {
    clearInterval(this.refresher);
  }
  fetchMessages = () => {
    this.props.fetchMessages(this.props.channelFromParams);
  }

  render() {
    const messages = this.props.messages.map(message => <Message key={message.id} message={message} />);
    return (
      <div className="channel-container">
        <div className="channel-title">Channel #{this.props.channelFromParams}</div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          { messages }
        </div>
        <MessageForm channel={this.props.channelFromParams} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
