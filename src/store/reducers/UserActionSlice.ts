import {IUserAction} from "../../types/IUserAction";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserActionState {
    userActions: IUserAction[];
    filteredUserActions: IUserAction[];
}

const initialState: UserActionState = {
    userActions: [],
    filteredUserActions: [],
}

export const UserActionSlice = createSlice({
    name: "UserAction",
    initialState,
    reducers: {
        loadActions(state, action: PayloadAction<IUserAction[]>) {
            state.userActions = action.payload;
        },
        filterActions(state, action: PayloadAction<string>) {
            state.filteredUserActions = action.payload !== "" ? state.userActions
                .filter(userAction => userAction.action.includes(action.payload))
                : state.userActions;
        }
    }
})

export default UserActionSlice.reducer;