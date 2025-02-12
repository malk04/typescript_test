import React from "react";
import { Table2, Column, ColumnHeaderCell, Cell } from "@blueprintjs/table";
import '@blueprintjs/table/lib/css/table.css';
import "./UserActionTable.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import moment from "moment";

const UserActionTable: React.FC = () => {
    const onePageActions = useTypedSelector((state) => state.userActions.onePageActions);

    // Рендеринг ячеек
    const cellRenderer = (rowIndex: number, columnKey: keyof typeof onePageActions[number]) => {
        const value = onePageActions[rowIndex][columnKey];
        if (columnKey === "action_created_at") {
            return <Cell >{moment(value).format("YYYY-MM-DD HH:mm:ss")}</Cell>;
        }
        return <Cell >{value}</Cell>;
    };

    // Рендеринг заголовков
    const renderColumnHeader = (name: string, columnKey: keyof typeof onePageActions[number]) => (
        <ColumnHeaderCell
            name={name}
        />
    );

    return (
        <div className="table-container">
            <Table2 key={JSON.stringify(onePageActions)}
                    numRows={onePageActions.length}
                    columnWidths={[80, 240, 130]}>
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
