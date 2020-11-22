import React, { useRef, useEffect } from 'react';
import './ChatBody.scss';
import { useSelector } from 'react-redux';
const ChatBody = () => {
  const messages = useSelector((state) => state.messages);
  const messagesRef = useRef();
  useEffect(() => {
    messagesRef.current.scrollTo(0, 999999);
  }, [messages]);
  console.log(messages);
  return (
    <div ref={messagesRef} className='chat-body'>
      {messages
        ? messages.map((message) => {
            if (message.you) {
              return (
                <div
                  key={message.id}
                  className='chat-body__message'
                  style={{
                    background: '#17212B',
                    marginRight: 'auto',
                    marginLeft: '24px',
                  }}
                >
                  {message.content}
                  <div className='chat-body__message__info'>
                    {new Date(message.date)
                      .toLocaleDateString(navigator.language, {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                      .slice(12)}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={message.id} className='chat-body__message'>
                  {message.content}
                  <div className='chat-body__message__info' style={{color:'#72BCFD'}}>
                    {new Date(message.date)
                      .toLocaleDateString(navigator.language, {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                      .slice(12)}
                  </div>
                </div>
              );
            }
          })
        : null}
    </div>
  );
};

export default ChatBody;
