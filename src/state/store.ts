import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/state/counter/counterSlice";
import dataReducer from './user/dataSlice';

export const store = configureStore({ 
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;