import React, { useEffect, useState } from 'react';
import './ChatHeader.scss';
import iconChatInfo from '../../assets/images/icon-chat-info.svg';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../../redux/actions/messages/messages';
import iconLinkHome from '../../assets/images/icon-link-home.svg';
const ChatHeader = ({ dialogTitle }) => {
  const [chatTitle, setChatTitle] = useState('');
  const dispatch = useDispatch();
  const dialogs = useSelector((state) => state.dialogs.dialogs);
  const { chat } = useParams();

  useEffect(() => {
    dialogs?.map((dialog) =>
      dialog.id == chat ? setChatTitle(dialog.title) : null
    );
    dispatch(getMessages(chat));
  }, [chat]);

  return (
    <div className='chat-header'>
  
      
      <div className='chat-header__interlocutor'>
      <Link to='/'>
      <button className='chat-header__interlocutor__link' type='button'>
        <img
          src={iconLinkHome}
          alt='icon link home'
          
        />
      </button>
      </Link>
      <div className="chat-header__interlocutor__info">
       <div className='chat-header__interlocutor__info__name'>{chatTitle}</div>
        <div className='chat-header__interlocutor__info__time'>
          last seen 3 hours ago
        </div>
       
        </div>
      </div>
      <div className='chat-header__btn-info'>
        <img src={iconChatInfo} alt='icon chat info' />
      </div>
    </div>
  );
};

export default ChatHeader;
