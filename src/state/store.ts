import { configureStore } from "@reduxjs/toolkit";
import userListReducer from '@/state/user/userListSlice';
import loggedUserReducer from '@/state/user/loggedUserSlice';

export const store = configureStore({ 
  reducer: {
    userList: userListReducer,
    loggedUser: loggedUserReducer,
  } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;