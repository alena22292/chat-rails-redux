import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages, appendMessage } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  // componentDidMount() {
  //   // this.refresher = setInterval(this.fetchMessages, 5000);
  //   this.subscribeActionCable(this.props);
  // }

  // componentWillReceiveProps(nextProps) {
  //    if (this.props.channelFromParams != nextProps.channelFromParams) {
  //     this.subscribeActionCable(nextProps);
  //   }
  // }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.channelFromParams);
  }

  // subscribeActionCable = (props) => {
  //   App[`channel_${props.channelFromParams}`] = App.cable.subscriptions.create(
  //     { channel: 'ChannelsChannel', name: props.channelFromParams },
  //     {
  //       received: (message) => {
  //         if (message.channel === props.channelFromParams) {
  //           props.appendMessage(message);
  //         }
  //       }
  //     }
  //   );
  // }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">Channel #{this.props.channelFromParams}</div>
        <div className="channel-content" ref={list => this.list = list}>
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} {...message} />;
            })
          }
        </div>
        <MessageForm channel={this.props.channelFromParams} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages, appendMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
