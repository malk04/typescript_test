import {IUserAction} from "../../types/IUserAction";
import {UserActionEnum, UserActionsAllTypes} from "../types/UserActionTypes";

// Экшен для загрузки данных
export const loadActions = (actions: IUserAction[]): UserActionsAllTypes => ({
    type: UserActionEnum.LOAD_ACTIONS,
    payload: actions,
});

// Экшен для фильтрации
export const filterActions = (filter: string): UserActionsAllTypes => ({
    type: UserActionEnum.FILTER_ACTIONS,
    payload: filter,
});

// Экшен для сортировки
export const sortActions = (column: string, direction: 'asc' | 'desc') => ({
    type: UserActionEnum.SORT_ACTIONS,
    payload: { column, direction }
});
