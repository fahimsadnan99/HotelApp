import {createSlice} from "@reduxjs/toolkit"

 const roomSlice = createSlice({
    name: "room",
    initialState: {
        room: []
    },
    reducers: {
        addRoom(state, action) {
            state.room.push(action.payload);
        }
    }
        


})

export const {addRoom} = roomSlice.actions;

export default roomSlice.reducer;