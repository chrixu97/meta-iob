import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import { setOperatorState } from '@/state/operator/operatorSlice';
import { useTranslation } from 'react-i18next';

import OperatorCard from '@/components/organisms/OperatorCard/OperatorCard';
import UserItem from '@/components/molecules/UserItem/UserItem';
import Button from '@/components/atoms/Button/Button';

import './OperatorPanel.scss';


const OperatorPanel: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const contacs = useSelector((state: RootState) => state.userContactList.contacts);

  return (
    <div className="operator-panel">
      <div className="operator-buttons">
        <Button variant="primary" fullWidth={true} onClick={() => dispatch(setOperatorState('send'))}>
          {t('homePage.operatorPanel.buttons.send')}
        </Button>
        <Button variant="primary" fullWidth={true} onClick={() => dispatch(setOperatorState('request'))}>
          {t('homePage.operatorPanel.buttons.request')}
        </Button>
      </div>

      <OperatorCard></OperatorCard>

      <div className="my-contacts">
        <p className='my-contacts__title title'>{t('homePage.operatorPanel.contacts.title')}</p>

        <div className="my-contacts__list">
          {contacs.map(user => (
            <UserItem key={user.id} user={user} filled={false}></UserItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperatorPanel;