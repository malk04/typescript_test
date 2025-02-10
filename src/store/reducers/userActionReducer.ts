import {UserActionEnum, UserActionsAllTypes, UserActionState} from "../types/UserActionTypes";

// Начальное состояние
const initialState: UserActionState = {
    userActions: [],
    filteredUserActions: [],
};

// Редьюсер для работы с действиями пользователей
export function userActionReducer(state = initialState, action: UserActionsAllTypes): UserActionState {
    switch (action.type) {
        case UserActionEnum.LOAD_ACTIONS:
            return {
                ...state,
                userActions: action.payload,
            };
        case UserActionEnum.FILTER_ACTIONS:
            return {
                ...state,
                filteredUserActions: action.payload !== ""
                    ? state.userActions.filter(userAction => userAction.action.includes(action.payload))
                    : state.userActions,
            };
        default:
            return state;
    }
}
