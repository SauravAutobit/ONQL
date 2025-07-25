import { createSlice } from "@reduxjs/toolkit";

interface ExtensionSidebarState{
    value: boolean
}

const initialState: ExtensionSidebarState ={
    value: false
}

const extensionSidebarSlice = createSlice({
    name: "extensionSidebar",
    initialState,
    reducers: {
        setOpenExtensionSidebar: (state) => {
            state.value = !state.value; 
        }
    }
})


export const {setOpenExtensionSidebar} = extensionSidebarSlice.actions;

export default extensionSidebarSlice.reducer;