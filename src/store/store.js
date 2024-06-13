import { configureStore } from "@reduxjs/toolkit";
import { contactoSlice } from "./master";


export const store = configureStore({
    reducer : {
        contacto: contactoSlice.reducer,
    },
});