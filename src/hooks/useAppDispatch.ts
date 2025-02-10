import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";

// Хук для типизации useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
