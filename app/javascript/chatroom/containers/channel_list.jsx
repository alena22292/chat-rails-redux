import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectChannel, fetchMessages } from '../actions/index';

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.selectChannel(); // Will empty message list first
    this.props.fetchMessages(channel);
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.selectedChannel ? 'active' : null}
        onClick={() => this.handleClick(channel)}
      >
        <Link to={`/channels/${channel}`}>
          #{channel}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className="channels-container">
      <span>Redux Chat</span>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, fetchMessages },
    dispatch
  );
}

function mapReduxStateToPtops(reduxState) {
  return {
    channels: reduxState.channels,
  };
}

export default connect(mapReduxStateToPtops, mapDispatchToProps)(ChannelList);
