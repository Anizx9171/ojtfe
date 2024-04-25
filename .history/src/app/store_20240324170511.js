import { configureStore } from "@reduxjs/toolkit";
import students from "../features/students/StudentSlice"
import login from "../features/auth/authSlice"
import classes from "../features/classes/ClassSlice"
import classes from "../features/classes/ClassSlice"
export const store = configureStore ({
    reducer: { 
        students,
        login,
        classes
    },
});