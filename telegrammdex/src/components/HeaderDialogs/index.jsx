import React from 'react';
import './HeaderDialogs.scss';



const HeaderDialogs = () => {
  return (
    <div className='header-dialogs'>
      <div className='header-dialogs__btn-info'><div></div></div>
      <input className='header-dialogs__search' type='text' placeholder='Search' />
    </div>
  );
};

export default HeaderDialogs;
