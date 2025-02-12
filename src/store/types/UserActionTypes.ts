import { IUserAction } from "../../types/IUserAction";

// Перечисление типов экшенов
export enum UserActionEnum {
    LOAD_ACTIONS = "LOAD_ACTIONS",
    FILTER_ACTIONS = "FILTER_ACTIONS",
    PAGE_ACTIONS = "PAGE_ACTIONS",
}

// Интерфейс состояния
export interface UserActionState {
    userActions: IUserAction[];
    filteredUserActions: IUserAction[];
    onePageActions: IUserAction[];
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

// Интерфейс экшена загрузки страницы таблицы
interface PageTableAction {
    type: UserActionEnum.PAGE_ACTIONS;
    payload: number;
}

// Объединенный тип для всех экшенов
export type UserActionsAllTypes = LoadActionsAction | FilterActionsAction | PageTableAction;
