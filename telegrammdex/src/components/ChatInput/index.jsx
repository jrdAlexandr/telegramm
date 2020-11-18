import React, { useEffect, useRef, useState } from 'react';
import './ChatInput.scss';
import iconAddFile from '../../assets/images/icon-add-file.svg';
import iconSendMessage from '../../assets/images/icon-send-message.svg';
const ChatInput = () => {
const [inputMessage, setInputMessage] = useState('Write a message...')
  const inputMessageRef = useRef()
  const [rowsText, setRowsText] = useState(1);
  // const handlerInputMessage = (e) => {
  //   console.log(getComputedStyle(e.target).height);
  //   if ((e.target.scrollHeight - 4) / 21 < 7) {
  //     setRowsText((e.target.scrollHeight - 4) / 21);
  //   }
  // };
  const handlerInputMessage = (e) => {
    console.log(e.target);
    
  };


  const handlerSendMessage = () => {
   
    console.log( inputMessageRef.current.innerText)

    // setRowsText(1);
  };

  return (
    <div className='chat-input'>
      <img className='chat-input__icon' src={iconAddFile} alt='icon add file' />
      {/* <textarea
        onChange={handlerInputMessage}
       c
        placeholder='Write a message...'
        rows={rowsText}
      ></textarea> */}
      <span  className='chat-input__input' ref={inputMessageRef} onClick={()=>{setInputMessage('')}}  role="textbox" contenteditable="true">{inputMessage}</span>
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
