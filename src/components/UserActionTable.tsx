import React from "react";
import { Table2, Column, Cell } from "@blueprintjs/table";
import { useSelector } from "react-redux";
import {useAppSelector} from "../hooks/redux";


const UserActionTable: React.FC = () => {
    const filteredActions = useAppSelector(state => state.userActionReducer)
    // const filteredActions = useSelector((state: RootState) => state.userActions.filteredActions);

    console.log(filteredActions);

    return (
        <Table2 numRows={filteredActions.filteredUserActions.length}>
            <Column
                name="Username"
                cellRenderer={(rowIndex: number) => (
                    <Cell>{filteredActions.filteredUserActions[rowIndex].username}</Cell>
                )}
            />
            <Column
                name="Action"
                cellRenderer={(rowIndex: number) => (
                    <Cell>{filteredActions.filteredUserActions[rowIndex].action}</Cell>
                )}
            />
            <Column
                name="Timestamp"
                cellRenderer={(rowIndex: number) => (
                    <Cell>{filteredActions.filteredUserActions[rowIndex].action_created_at}</Cell>
                )}
            />
        </Table2>
    );
};

export default UserActionTable;
