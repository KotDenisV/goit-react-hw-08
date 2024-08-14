import axios from "axios";
// import { deleteContacts, fetchContacts, setError, setLoading } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://66b9241c3ce57325ac78ff7c.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk('fetchContacts', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('contacts');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContactThunk = createAsyncThunk('addContact', async (body, thunkAPI) => {
    try {
        const { data } = await axios.post('contacts', body);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


