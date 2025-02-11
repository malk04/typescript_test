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
        case UserActionEnum.SORT_ACTIONS:
            console.log('Sort actions:', action.payload);  // Логируем экшен для проверки
            return {
                ...state,
                filteredUserActions: [...state.filteredUserActions].sort((a, b) => {
                    const { column, direction } = action.payload;
                    let valA = a[column];
                    let valB = b[column];

                    // Обрабатываем сортировку
                    if (typeof valA === "string" && typeof valB === "string") {
                        return direction === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
                    }
                    if (typeof valA === "number" && typeof valB === "number") {
                        return direction === 'asc' ? valA - valB : valB - valA;
                    }
                    return 0;
                }),
            };
        default:
            return state;
    }
}
