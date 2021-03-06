import React from 'react';
import '../style/SidebarOption.css';
import { useHistory } from 'react-router-dom';
import db from '../firebase';

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push('title');
    }
  };

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className='sidebar-option'
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className='sidebar-option-icon' />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className='sidebar-option-channel'>
          <span className='sidebar-option-hash'>#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
