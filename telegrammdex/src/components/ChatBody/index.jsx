import React from 'react';
import './ChatBody.scss';
import { useSelector } from 'react-redux';
const ChatBody = () => {
  const messages = useSelector((state) => state.messages);
console.log(messages);
  return (
    <div className='chat-body'>
      {messages
        ? messages.map((message) => {
           return(<div key={message.id} className='chat-body__message'>
           {message.content}
         </div>) 
          })
        : null}
    </div>
  );
};

export default ChatBody;
