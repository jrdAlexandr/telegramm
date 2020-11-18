import React, { useEffect, useState } from 'react';
import './ChatInput.scss';
import iconAddFile from '../../assets/images/icon-add-file.svg';
import iconSendMessage from '../../assets/images/icon-send-message.svg';
const ChatInput = () => {
  const [rowsText, setRowsText] = useState(1);
  const handlerInputMessage = (e) => {
    console.log(getComputedStyle(e.target).height);
    if ((e.target.scrollHeight - 4) / 21 < 7) {
      setRowsText((e.target.scrollHeight - 4) / 21);
    }
  };
  const handlerSendMessage = () => {
    setRowsText(1);
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
        onClick={handlerSendMessage}
      />
    </div>
  );
};

export default ChatInput;
