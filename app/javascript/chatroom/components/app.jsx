import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';



const App = (props) => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="#" alt="logo" />
      </div>
      <ChannelList selectedChannel={props.match.params.channel} />
      <MessageList selectedChannel={props.match.params.channel} />
    </div>
  );
};

export default App;
