const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    value : "addAccount"
}

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState,
    reducers:{
        sideBarStatus:(state,action)=>{
            state.value = action.payload;
        }
    }
})

export const {sideBarStatus} = sidebarSlice.actions
export default sidebarSlice.reducer