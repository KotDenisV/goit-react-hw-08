import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi, setToken } from "../../config/goitApi";
// import axios from "axios";

// axios.defaults.baseURL = 'https://66b9241c3ce57325ac78ff7c.mockapi.io/';
// axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const fetchContactsThunk = createAsyncThunk('fetchContacts', async (_, thunkAPI) => {
    try {
        const { data } = await goitApi.get('contacts');
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await goitApi.delete(`contacts/${id}`);
        setToken(data.token);
        return data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContactThunk = createAsyncThunk('addContact', async (body, thunkAPI) => {
    try {
        const { data } = await goitApi.post('contacts', body);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})