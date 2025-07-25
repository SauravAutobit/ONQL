import { configureStore } from '@reduxjs/toolkit';
import extensionSidebarSlice from "../store/slices/extensionSidebarSlice"

const appStore = configureStore({
    reducer: {
        extensionSidebar: extensionSidebarSlice,
    },	
})

export type RootState = ReturnType<typeof appStore.getState>; 
export type AppDispatch = typeof appStore.dispatch;

export default appStore;