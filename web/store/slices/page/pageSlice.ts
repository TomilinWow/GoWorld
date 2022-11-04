import { createSlice } from '@reduxjs/toolkit';
import {
    AdjustmentsHorizontalIcon,
    ArrowLeftOnRectangleIcon,
    ChartBarIcon,
    CpuChipIcon,
    HomeIcon
} from "@heroicons/react/24/solid";
import React from "react";

export type AuthState = {
    currentPage: number | null;

}

const initialState: AuthState = {
    currentPage: null,
};

export const authSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
});

export const { setCurrentPage } = authSlice.actions;
export default authSlice.reducer;
