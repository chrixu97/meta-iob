import React from 'react';
import './UserItem.scss';

import UserIcon from '@/components/atoms/UserIcon/UserIcon';

interface UserItemProps {
  user: {
    id: number,
    name: string,
  },
  filled?: boolean,
}

const UserItem: React.FC<UserItemProps> = ({ user, filled = true }) => {

  return (
    <div className={`user-item ${filled ? 'user-item--filled' : ''}`}>
      
      <UserIcon name={user.name}/>
      <p className='user-name'>{user.name}</p>
    </div>
  );
};

export default UserItem;