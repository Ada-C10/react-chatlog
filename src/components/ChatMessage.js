import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const ChatMessage = (props) => {
  const name = props.sender;
  const body = props.body;
  const time = props.time;


  const entryColor = name === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';


  return (
    <section class={entryColor}>
      <div class="entry-name">{name}</div>
      <div class="entry-bubble">
        <div class ="entry-body">{body}</div>
        <div class="entry-time">
          <Timestamp time={time}/>
        </div>
      </div>
    </section>
  );
};
export default ChatMessage;
