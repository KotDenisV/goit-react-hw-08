import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from "./operations";
import { logoutThunk } from '../auth/operations';


const initialState = {
    items: [],
    loading: false,
    error: false,
};

const slice = createSlice({
    name: 'contacts',
    initialState,    
    extraReducers: builder => {
        builder
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContactsThunk.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(deleteContactThunk.rejected, (state, action) => {
                state.error = true;
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(logoutThunk.fulfilled, () => {
              return initialState;
            });
    },
});

export const contactsReducer = slice.reducer;