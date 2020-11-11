import React from 'react';
import Avatar from '../Avatar';
import './DialogItem.scss';


const DialogItem = () => {
  return (
    <div className='dialog-item'>
      <div className='dialog-item__avatar'>
        <Avatar/>
        </div>
      <div className='dialog-item__info'>
        <div className='dialog-item__info-top'>
          <b>Leonid</b> <span>19:26</span>
        </div>
        <div className='dialog-item__info-bottom'>Придешь сегодня на игру?</div>
      </div>
    </div>
  );
};

export default DialogItem;
