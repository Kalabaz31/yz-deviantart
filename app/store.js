import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "../features/Layout/layoutSlice";

export const store = configureStore({
    reducer: { layout: layoutSlice },
});
