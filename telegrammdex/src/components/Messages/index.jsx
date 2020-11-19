import React from 'react';
import ChatInput from '../ChatInput';
import ChatHeader from '../ChatHeader';
import ChatBody from '../ChatBody';
import './Messages.scss';

const Messages = ({dialogTitle}) => {
 

  return (
    <div className='messages'>
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </div>
  );
};

export default Messages;
