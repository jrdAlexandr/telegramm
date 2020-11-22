import React from 'react';
import Avatar from '../Avatar';
import './DialogItem.scss';

const DialogItem = ({ dialogInfo }) => {
  //   id: 435
  // message_content: "Новая парадигма реальности: склады ломятся от зерна"
  // message_date: 1603269272
  // message_read: true
  // message_you: true
  // title: "Потерянная принцесса"
  return (
    <div className='dialog-item'>
      <div className='dialog-item__avatar'>
        <Avatar />
      </div>
      <div className='dialog-item__info'>
        <div className='dialog-item__info-top'>
          <b>{dialogInfo.title}</b>
          <span>
            {new Date(dialogInfo.message_date)
              .toLocaleDateString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit',
              })
              .slice(12)}
          </span>
        </div>
        <div className='dialog-item__info-bottom'>
          <p>{dialogInfo.message_content}</p>
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
