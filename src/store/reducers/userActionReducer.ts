import {UserActionEnum, UserActionsAllTypes, UserActionState} from "../types/UserActionTypes";

// Начальное состояние
const initialState: UserActionState = {
    userActions: [],
    filteredUserActions: [],
    onePageActions: [],
};

const ITEMS_PER_PAGE = 20; // Количество элементов на страницу

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
        case UserActionEnum.PAGE_ACTIONS:
            const startIndex = (action.payload - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            return {
                ...state,
                onePageActions: state.filteredUserActions.slice(startIndex, endIndex),
            };
        default:
            return state;
    }
}
