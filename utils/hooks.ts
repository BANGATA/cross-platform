// hooks.ts

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../utils/redux/store"; // adjust the path as needed

// Typed version of useDispatch for thunks
export const useAppDispatch: () => AppDispatch = useDispatch;
