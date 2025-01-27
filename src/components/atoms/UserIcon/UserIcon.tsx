import React from 'react';
import './UserIcon.scss';

interface UserIconProps {
  name: string;
}

const UserIcon: React.FC<UserIconProps> = ({ name }) => {
  const getInitials = (fullName: string) => {
    const [firstName, lastName] = fullName.split(' ');
    const firstInitial = firstName ? firstName.charAt(0) : '';
    const lastInitial = lastName ? lastName.charAt(0) : '';
    return `${firstInitial}${lastInitial}`;
  };

  const initials = getInitials(name);

  return (
    <div className={'user-icon'}>
      <span>{initials}</span>
    </div>
  );
};

export default UserIcon;