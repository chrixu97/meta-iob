import { configureStore, Store } from "@reduxjs/toolkit";
import userListReducer from '@/state/user/userListSlice';
import loggedUserReducer from '@/state/user/loggedUserSlice';
import userContactListReducer from '@/state/user/userContactSlice';
import operatorReducer from '@/state/operator/operatorSlice';

export const store:Store = configureStore({ 
  reducer: {
    userList: userListReducer,
    loggedUser: loggedUserReducer,
    userContactList: userContactListReducer,
    operator: operatorReducer,
  } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;