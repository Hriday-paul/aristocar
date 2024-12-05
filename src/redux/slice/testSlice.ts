import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userType {
    user : string[]
  }
  
  const initialState: userType = {
      user: ['xyz']
  }
  

const testSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { } = testSlice.actions;
  
  export default testSlice.reducer;