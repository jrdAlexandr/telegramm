import React, { useState } from 'react';
import './ChatInput.scss';
import iconAddFile from '../../assets/images/icon-add-file.svg';
import iconSendMessage from '../../assets/images/icon-send-message.svg';
const ChatInput = () => {
  const [rowsText, setRowsText] = useState(1);

  const handlerInputMessage = (e) => {
    if ((e.target.scrollHeight - 4) / 21 <= 6) {
      setRowsText((e.target.scrollHeight - 4) / 21);
    }
  };

  return (
    <div className='chat-input'>
      <img className='chat-input__icon' src={iconAddFile} alt='icon add file' />
      <textarea
        onChange={handlerInputMessage}
        className='chat-input__input'
        placeholder='Write a message...'
        rows={rowsText}
      ></textarea>
      <img
        className='chat-input__icon'
        src={iconSendMessage}
        alt='icon send message'
      />
    </div>
  );
};

export default ChatInput;
