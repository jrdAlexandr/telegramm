import React, { useEffect, useRef, useState } from 'react';
import './ChatInput.scss';
import iconAddFile from '../../assets/images/icon-add-file.svg';
import iconSendMessage from '../../assets/images/icon-send-message.svg';
import { useDispatch } from 'react-redux';
import { ADD_MESSAGE } from '../../redux/actions/messages/messages';

const ChatInput = () => {
  const [inputMessage, setInputMessage] = useState('Write a message...');
  const inputMessageRef = useRef();
  const dispatch = useDispatch();

  const handlerSendMessage = (e) => {
    e.preventDefault();
    if (
      inputMessageRef.current.innerText !== 'Write a message...' &&
      inputMessageRef.current.innerText !== ''
    ) {
      dispatch(
        ADD_MESSAGE({
          date: Date.now(),
          id: Date.now(),
          read: false,
          you: true,
          content: inputMessageRef.current.innerText,
        })
      );

      setInputMessage('Write a message...');
      return false;
    }
  };
  const sendMessage = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (
        inputMessageRef.current.innerText !== 'Write a message...' &&
        inputMessageRef.current.innerText !== ''
      ) {
        dispatch(
          ADD_MESSAGE({
            date: Date.now(),
            id: Date.now(),
            read: false,
            you: true,
            content: inputMessageRef.current.innerText,
          })
        );
        setInputMessage('');
        inputMessageRef.current.innerText = '';
      }
    }
  };

  return (
    <div className='chat-input'>
      <img className='chat-input__icon' src={iconAddFile} alt='icon add file' />

      <span
        onFocus={() => {
          setInputMessage('');
        }}
        onBlur={() => {
          if (inputMessageRef.current.innerText === '') {
            setInputMessage('Write a message...');
          }
        }}
        onKeyDown={sendMessage}
        className='chat-input__input'
        ref={inputMessageRef}
        onClick={() => {
          setInputMessage('');
        }}
        role='textbox'
        contenteditable='true'
      >
        {inputMessage}
      </span>
      <button className='chat-input__icon' type='button'>
        <img
          src={iconSendMessage}
          alt='icon send message'
          onClick={handlerSendMessage}
        />
      </button>
    </div>
  );
};

export default ChatInput;
