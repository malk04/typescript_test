import { IUserAction } from "../../types/IUserAction";

// Перечисление типов экшенов
export enum UserActionEnum {
    LOAD_ACTIONS = "LOAD_ACTIONS",
    FILTER_ACTIONS = "FILTER_ACTIONS",
    SORT_ACTIONS = "SORT_ACTIONS",
}

// Интерфейс состояния
export interface UserActionState {
    userActions: IUserAction[];
    filteredUserActions: IUserAction[];
}

// Интерфейс экшена загрузки
interface LoadActionsAction {
    type: UserActionEnum.LOAD_ACTIONS;
    payload: IUserAction[];
}

// Интерфейс экшена установки фильтрации
interface FilterActionsAction {
    type: UserActionEnum.FILTER_ACTIONS;
    payload: string;
}

// Интерфейс экшена сортировки
interface SortActions {
    type: UserActionEnum.SORT_ACTIONS;
    payload: {
        column: keyof IUserAction;
        direction: "asc" | "desc";
    };
}

// Объединенный тип для всех экшенов
export type UserActionsAllTypes = LoadActionsAction | FilterActionsAction | SortActions;
