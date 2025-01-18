import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    avatar: '',
    fullName: '',
    email: '',
    github: '',
    submit: false
}
export const ticketSlice = createSlice({
    name: "ticket",
    initialState, // Corrected typo: `initialstate` → `initialState`
    reducers: {
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        setFullName: (state, action) => {
            state.fullName = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setGithub: (state, action) => {
            state.github = action.payload;
        },
        setSubmit: (state, action) => {
            state.submit = action.payload;
        }
    },
})
export const { setAvatar, setFullName, setEmail, setGithub, setSubmit } = ticketSlice.actions; //These are functions that return actions that can be dispatched.
export default ticketSlice.reducer; // It's responsible for applying the changes based on the dispatched actions.
