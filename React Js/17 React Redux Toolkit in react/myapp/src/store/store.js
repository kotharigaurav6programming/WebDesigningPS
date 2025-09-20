import { configureStore } from "@reduxjs/toolkit";
import storeSlice from './storeSlice.js';
export default configureStore({
    reducer : {
        storeSlice
    }
});