import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: "fetchStatus",
    initialState: {
        fetchDone: false,
        currentlyFetching: true,
    },
    reducers: {
        makeFetchDone: (store, action) => {

            store.fetchDone = true;
            return store;
        },
        fetchingStarted: (store, action) => {
            store.currentlyFetching = true;
            return store;
        },
        fetchingEnd: (store, action) => {
            store.currentlyFetching = false;
            return store;
        },
    }

})

export default fetchStatusSlice;
export const fetchAction = fetchStatusSlice.actions;