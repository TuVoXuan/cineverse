import { authApi } from "@/api/auth-api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk('user/login', async (body: {account: string, password: string}, thunkAPI) => {
    const response = await authApi.login(body.account, body.password);
    return response.data;
})