import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

const Chatlog = (props) => {

  const messages = props.messages.map((message, i) => {
    return <ChatMessage key={i} sender={message.sender} body={message.body} time={message.timeStamp}/>
  });

  return (
    <div class='chat-log'>
      {messages}
    </div>
  );
};

export default Chatlog;
