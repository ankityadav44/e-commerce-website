import { createSlice } from "@reduxjs/toolkit";

const lastItem = sessionStorage.getItem("buyItem")

const buyItemSlice = createSlice({
    name: "buyItem",
    initialState: lastItem,
    reducers: {
        clickToBuy: (store, action) => {
            // console.log(action);
            // console.log("store", store);
            store = action.payload;
            return store;
        }
    }
})

export const buyAction = buyItemSlice.actions;
export default buyItemSlice;