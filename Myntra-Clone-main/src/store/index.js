import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemSlice"
import fetchStatusSlice from "./fetchStatusSlice"
import buyItemSlice from "./buyItem"
import bagSlice from "./bagSlice"

const myntraStore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        buyItem: buyItemSlice.reducer,
        bag: bagSlice.reducer,
    }
})
export default myntraStore