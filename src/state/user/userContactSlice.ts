import { createSlice } from '@reduxjs/toolkit';
import { staticContactListData } from '@/data/contactListData';

interface userContactListState {
  contacts: {
    id: number;
    name: string;
    isWallet: boolean;
  }[],
}

const initialState: userContactListState = {
  contacts: staticContactListData.contacts
};

const userContactListSlice = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {}
});

export default userContactListSlice.reducer;