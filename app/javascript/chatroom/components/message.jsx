import React, { Component } from 'react';
import { emojify } from 'react-emojione';

class Message extends Component {
  strToRGB = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
    return `#${"00000".substring(0, 6 - c.length)}${c}`;
  }
  render() {
    const { created_at, author, content } = this.props.message;
    const time = new Date(created_at).toLocaleTimeString();
    return (
      <div className="message-container">
        <i className="author">
          <span style={{ color: this.strToRGB(author) }}>{author}</span>
          <small>{time}</small>
        </i>
        <p>{emojify(content)}</p>
      </div>
    );
  }
}

export default Message;
