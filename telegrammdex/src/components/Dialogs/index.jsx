import React, { useEffect } from 'react';
import HeaderDialogs from '../HeaderDialogs';
import DialogItem from '../DialogItem';
import './Dialogs.scss';
import { getDialogs } from '../../redux/actions/dialogs/dialogs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dialogs = () => {
  const dispatch = useDispatch();
  const dialogs = useSelector((state) => state.dialogs.dialogs);
  useEffect(() => {
    dispatch(getDialogs());
  }, []);
  console.log(dialogs);
  return (
    <div className='dialogs'>
      <HeaderDialogs />
      {dialogs.map((dialog) => {
        return (
          <Link to={`/${dialog.id}`}>
            <DialogItem
              key={dialog.id}
             
              dialogInfo={dialog}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default Dialogs;
