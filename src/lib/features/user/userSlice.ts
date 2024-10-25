import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store';
import { login } from './userAction';

// Define a type for the slice state
interface IUserSlice {
  userInfo: IUser | null,
  token: string
}

// Define the initial state using that type
const initialState: IUserSlice = {
  userInfo: null,
  token: ''
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled,(state, action: PayloadAction<ILogin>) => {
        state.userInfo = action.payload.user,
        state.token = action.payload.token
    } )
  }
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer