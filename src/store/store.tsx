import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from './slice';
const store = configureStore({
    reducer: {
        ticket: ticketReducer, // Assign the ticketReducer to the 'ticket' key

    }
})
export default store;
