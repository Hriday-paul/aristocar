import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Cookies } from "react-cookie";

const cookies = new Cookies();


export interface userType {
  user: { name: string | null, email: string | null, phoneNumber: string | null, gender: string | null, image: string | null, role: 'user' | 'dealer' | null, address: string | null }
}

type addUserType = { name: string, email: string, phoneNumber: string, gender: string, image: string, role: 'user' | 'dealer', address: string }

const initialState: userType = {
  user: { name: null, email: null, phoneNumber: null, gender: null, image: null, role: null, address: null }
}


const userSlice = createSlice({
  name: 'user',
  initialState, 
  reducers: {
    addUserDetails: (state, { payload }: PayloadAction<addUserType>) => {
      state.user.name = payload?.name;
      state.user.email = payload?.email;
      state.user.phoneNumber = payload?.phoneNumber;
      state.user.role = payload?.role;
      state.user.gender = payload.gender;
      state.user.image = payload.image;
    },

    removeUser: (state) => {
      state.user.name = null;
      state.user.email = null;
      state.user.phoneNumber = null;
      state.user.role = null;
      state.user.gender = null;
      state.user.image = null;
      cookies.remove("AccessToken");
      // cookies.remove("token");
      cookies.remove("RefreshToken");
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUserDetails, removeUser } = userSlice.actions;

export default userSlice.reducer;