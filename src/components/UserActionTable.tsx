import React from "react";
import { Table2, Column, Cell } from "@blueprintjs/table";
import {useTypedSelector} from "../hooks/useTypedSelector";

// Компонент таблицы с действиями пользователей
const UserActionTable: React.FC = () => {

    const filteredActions =
        useTypedSelector((state) => state.userActions.filteredUserActions);

    console.log(filteredActions);

    return (
        <Table2 numRows={filteredActions.length}>
            <Column
                name="Username"
                cellRenderer={(rowIndex: number) => (
                    <Cell>{filteredActions[rowIndex].username}</Cell> // Предполагаем, что у IUserAction есть поле username
                )}
            />
            <Column
                name="Action"
                cellRenderer={(rowIndex: number) => (
                    <Cell>{filteredActions[rowIndex].action}</Cell> // Поле action из IUserAction
                )}
            />
            <Column
                name="Timestamp"
                cellRenderer={(rowIndex: number) => (
                    <Cell>{filteredActions[rowIndex].action_created_at}</Cell> // Поле action_created_at
                )}
            />
        </Table2>
    );
};

export default UserActionTable;
