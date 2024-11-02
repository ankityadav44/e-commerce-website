import { createSlice } from "@reduxjs/toolkit";
// import DEFAULT_ITEMS from "../data/items";
// console.log(DEFAULT_ITEMS);

const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addInitialStore: (state, action) => {
            // console.log(action);
            return state = action.payload;
        }
    }
})


export const itemActions = itemsSlice.actions

export default itemsSlice;  