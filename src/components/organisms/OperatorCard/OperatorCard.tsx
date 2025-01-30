import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import { setOperatorState } from '@/state/operator/operatorSlice';

import { useTranslation } from 'react-i18next';

import { addActivity } from '@/state/user/loggedUserSlice';

import UserItem from '@/components/molecules/UserItem/UserItem';
import Card from '@/components/atoms/Card/Card';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import useOperatorValidation from '@/hooks/useOperatorValidation';

import './OperatorCard.scss';

interface UseOperatorValidationReturn {
  number: string;
  numberError: boolean;
  handleNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OperatorCard: React.FC = () => {
  const { t } = useTranslation();
  const formValidation = useOperatorValidation() as UseOperatorValidationReturn;
  
  const dispatch = useDispatch();
  const loggedUser = useSelector((state: RootState) => state.loggedUser.user);
  const operator = useSelector((state: RootState) => state.operator.value);
  const contacts = useSelector((state: RootState) => state.userContactList.contacts);

  const [user, setUser] = useState<{ id: number; name: string; isWallet: boolean}>({ id: 0, name: '', isWallet: false });

  useEffect(() => {
    switch (operator) {
      case 'add':
        setUser({ id: 1, name: 'Visa Débito **9788', isWallet: true });
        break;

      case 'send':
        setUser({ id: contacts[0].id, name: contacts[0].name, isWallet: false });
        break;

      case 'request':
        setUser({ id: contacts[0].id, name: contacts[0].name, isWallet: false });
        break;

      default:
        setUser({ id: -1, name: '', isWallet: false });
        break;
    }
  }, [contacts, operator]);

  const getCurrentDate = (): string => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    return `${day} de ${month}`;
  };

  const generateNewId = (): string => {
    const lastActivity = loggedUser.activities[0];
    const lastId = lastActivity ? parseInt(lastActivity.id) : 0;
    return (lastId + 1).toString();
  };

  const operate = () => {
    const formattedQuantity = parseFloat(formValidation.number).toFixed(2) + ' €';
    const modifiedUser = { ...loggedUser };
    const type = operator == 'add' ? 'visa' : 'restaurant';
    let title = "";

    switch (operator) {
      case 'add':
        title = "Dinero Añadido";
        modifiedUser.balance += parseFloat(formattedQuantity);
        break;

      case 'send':
        title = `Bizum Enviado a ${user.name}`;
        modifiedUser.balance -= parseFloat(formattedQuantity);
        break;

      case 'request':
        title = `Bizum Solicitado a ${user.name}`;
        modifiedUser.balance += parseFloat(formattedQuantity);
        break;

      default:
        break;
    }

    const newActivity = {
      id: generateNewId(),
      title: title,
      type: type,
      date: getCurrentDate(),
      amount: `${operator == 'send' ? '-' : '+'}${formattedQuantity}`
    }

    modifiedUser.activities = [newActivity, ...modifiedUser.activities];

    dispatch(addActivity(modifiedUser));
  };  

  return (
    <div className={`operator-card operator-card--${operator}`}>
      <Card>
        {operator != 'hide' && (
          <p className='operator-card__title title'>
            {t(`homePage.operatorPanel.operatorCards.title.${operator}`)}
          </p>
        )}

        <UserItem user={user} />

        <Input
          type="number"
          placeholder="Cantidad"
          value={formValidation.number}
          onChange={formValidation.handleNumberChange}
          error={formValidation.numberError}
        />

        <div className="operator-card__extra-content">
          {operator === 'add' && (
            <Button variant="primary" onClick={() => operate()}>
              {t(`homePage.operatorPanel.buttons.add`)}
            </Button>
          )}

          {operator === 'send' && (
            <Button variant="primary" onClick={() => operate()}>
              {t(`homePage.operatorPanel.buttons.send`)}
            </Button>
          )}

          {operator === 'request' && (
            <Button variant="primary" onClick={() => operate()}>
              {t(`homePage.operatorPanel.buttons.request`)}
            </Button>
          )}
        </div>

        <div className='operator-card__close'>
          <Button variant="tertiary" onClick={() => dispatch(setOperatorState('hide'))}>X</Button>
        </div>
      </Card>
    </div>
  );
};

export default OperatorCard;