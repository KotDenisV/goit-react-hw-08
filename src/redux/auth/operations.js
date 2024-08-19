import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearToken, goitApi, setToken } from "../../config/goitApi";
import ContactList from "../../components/ContactList/ContactList";

const registerThunk = createAsyncThunk('register', async (credentials, thunkAPI) => {
    try {
        const { data } = await goitApi.post('users/signup', credentials);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const loginThunk = createAsyncThunk('login', async (credentials, thunkAPI) => {
    try {
        const { data } = await goitApi.post('users/login', credentials);
        setToken(data.token);
        return data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
    try {
        await goitApi.post('users/logout');
        clearToken();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const getMeThunk = createAsyncThunk('getMe', async (_, thunkAPI) => {
    try {
        const { data } = await goitApi.post('users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export { registerThunk, loginThunk, logoutThunk, getMeThunk };