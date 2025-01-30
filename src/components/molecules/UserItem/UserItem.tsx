import React from 'react';
import './UserItem.scss';

import UserIcon from '@/components/atoms/UserIcon/UserIcon';
import ActivityIcon from '@/components/atoms/ActivityIcon/ActivityIcon';

interface UserItemProps {
  user: {
    id: number,
    name: string,
    isWallet: boolean,
  },
  filled?: boolean,
}

const UserItem: React.FC<UserItemProps> = ({ user, filled = true}) => {

  return (
    <div className={`user-item ${filled ? 'user-item--filled' : ''}`}>
      {user.isWallet && <ActivityIcon type="visa"/>}
      {!user.isWallet && <UserIcon name={user.name}/>}

      <p className='user-name'>{user.name}</p>
    </div>
  );
};

export default UserItem;