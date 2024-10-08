import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {    
    const normalizedFilter = filter ? filter.toLowerCase() : '';
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);