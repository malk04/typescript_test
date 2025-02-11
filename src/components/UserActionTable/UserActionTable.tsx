import React, { useState, useMemo } from "react";
import { Table2, Column, ColumnHeaderCell, Cell } from "@blueprintjs/table";
import { Menu, MenuItem } from "@blueprintjs/core";
import '@blueprintjs/table/lib/css/table.css';
import "./UserActionTable.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import moment from "moment";
import { sortActions } from "../../store/action-creators/userActionActions";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const UserActionTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const filteredActions = useTypedSelector((state) => state.userActions.filteredUserActions);

    const [sortColumn, setSortColumn] = useState<keyof typeof filteredActions[number] | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);

    // Функция для обработки сортировки
    const handleSort = (column: keyof typeof filteredActions[number], direction: 'asc' | 'desc') => {
        setSortColumn(column);
        setSortDirection(direction);
        console.log("clcl")
        // Отправляем экшен сортировки в Redux
        // dispatch(sortActions(column, direction));
    };

    // Мемоизация сортированных данных с улучшенной логикой
    const sortedActions = useMemo(() => {
        console.log('Sorting...'); // Для отладки

        // Проверка на наличие колонки и направления сортировки
        if (!sortColumn || !sortDirection) return filteredActions;

        // Создание нового массива для сортировки
        return [...filteredActions].sort((a, b) => {
            let valA = a[sortColumn];
            let valB = b[sortColumn];

            // Сортировка для даты
            if (sortColumn === "action_created_at") {
                const dateA = new Date(valA);
                const dateB = new Date(valB);
                return sortDirection === 'asc'
                    ? dateA.getTime() - dateB.getTime()
                    : dateB.getTime() - dateA.getTime();
            }

            // Сортировка для строк
            if (typeof valA === "string" && typeof valB === "string") {
                return sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
            }

            // Сортировка для чисел
            if (typeof valA === "number" && typeof valB === "number") {
                return sortDirection === 'asc' ? valA - valB : valB - valA;
            }

            return 0; // Если типы данных не совпадают, не сортировать
        });
    }, [filteredActions, sortColumn, sortDirection]);

    // Рендеринг ячеек для таблицы
    const cellRenderer = (rowIndex: number, columnKey: keyof typeof filteredActions[number]) => {
        const value = sortedActions[rowIndex][columnKey];
        console.log(value);
        if (columnKey === "action_created_at") {
            return <Cell>{moment(value).format("YYYY-MM-DD HH:mm:ss")}</Cell>;
        }
        return <Cell>{value}</Cell>;
    };

    // Меню для сортировки по возрастанию и убыванию
    const menuRenderer = (column: keyof typeof filteredActions[number]) => (
        <Menu>
            <MenuItem
                icon="sort-asc"
                onClick={() => handleSort(column, 'asc')}
                text="Sort Asc"
            />
            <MenuItem
                icon="sort-desc"
                onClick={() => handleSort(column, 'desc')}
                text="Sort Desc"
            />
        </Menu>
    );

    // Рендеринг заголовков с меню
    const renderColumnHeader = (name: string, columnKey: keyof typeof filteredActions[number]) => (
        <ColumnHeaderCell
            name={name}
            menuRenderer={() => menuRenderer(columnKey)}
        />
    );

    return (
        <div className="table-container">
            <Table2 key={filteredActions.length} numRows={sortedActions.length}>
                <Column
                    columnHeaderCellRenderer={() => renderColumnHeader("Логин", "username")}
                    cellRenderer={(rowIndex) => cellRenderer(rowIndex, "username")}
                />
                <Column
                    columnHeaderCellRenderer={() => renderColumnHeader("Действие", "action")}
                    cellRenderer={(rowIndex) => cellRenderer(rowIndex, "action")}
                />
                <Column
                    columnHeaderCellRenderer={() => renderColumnHeader("Дата и время", "action_created_at")}
                    cellRenderer={(rowIndex) => cellRenderer(rowIndex, "action_created_at")}
                />
            </Table2>
        </div>
    );
};

export default UserActionTable;
