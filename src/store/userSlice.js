import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isAuthorized: false
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthorized: (state, action) => {
     state.isAuthorized = action.payload
    }
  }
})

export const { setIsAuthorized } = userSlice.actions

export default userSlice.reducer