import React from 'react';
import './ChatHeader.scss';
import iconChatInfo from '../../assets/images/icon-chat-info.svg';
const ChatHeader = () => {
  return (
    <div className='chat-header'>
      <div className='chat-header__interlocutor'>
        <div className='chat-header__interlocutor__name'>Gregor Zamza</div>
        <div className='chat-header__interlocutor__time'>
          last seen 3 hours ago
        </div>
      </div>
      <div className='chat-header__btn-info'>
        <img src={iconChatInfo} alt='icon chat info' />
      </div>
    </div>
  );
};

export default ChatHeader;
