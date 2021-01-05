import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMessages } from '../actions';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.channelFromParams ? 'active' : null}
        role="presentation"
      >
        <Link to={`/${channel}`}>
          #{channel}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className="channels-container">
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
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

function mapReduxStateToPtops(reduxState) {
  return {
    channels: reduxState.channels,
  };
}

export default connect(mapReduxStateToPtops, mapDispatchToProps)(ChannelList);
