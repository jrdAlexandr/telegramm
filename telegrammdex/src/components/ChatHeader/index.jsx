import React, { useEffect, useState } from 'react';
import './ChatHeader.scss';
import iconChatInfo from '../../assets/images/icon-chat-info.svg';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../../redux/actions/messages/messages';
const ChatHeader = ({ dialogTitle }) => {
  const [chatTitle, setChatTitle] = useState('');
  const dispatch = useDispatch();
  const dialogs = useSelector((state) => state.dialogs.dialogs);
  const { chat } = useParams();
  // useEffect(() => {
    
  // }, []);
  useEffect(() => {
    dialogs?.map((dialog) =>
      dialog.id == chat ? setChatTitle(dialog.title) : null
    );
    dispatch(getMessages(chat));
  }, [chat]);

  return (
    <div className='chat-header'>
      <div className='chat-header__interlocutor'>
        <div className='chat-header__interlocutor__name'>{chatTitle}</div>
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
