import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: false,
    messageSaved: '',
}

export const contactoSlice = createSlice({
    name: 'contacto',
    initialState,
    reducers: {
        savingNewMessage: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        saveMessage: (state) => {
            state.isSaving = false;
            state.messageSaved = 'Tu solicitud ha sido enviada correctamente';
        }
    },
})

// Action creators are generated for each case reducer function
export const { savingNewMessage, saveMessage } = contactoSlice.actions;