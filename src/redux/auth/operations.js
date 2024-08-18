import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { goitApi } from "../../config/goitApi";

const registerThunk = createAsyncThunk('register', async (credentials, thunkAPI) => {
    try {
        const { data } = await goitApi.post('users/signup', credentials);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const loginThunk = createAsyncThunk('login', async (credentials, thunkAPI) => {
    try {
        const { data } = await goitApi.post('users/login', credentials);
        return data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
    }
})

export { registerThunk, loginThunk };