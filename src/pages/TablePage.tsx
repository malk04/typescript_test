import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch";
import userActionsData from "../data/db.json";
import {IUserAction} from "../types/IUserAction";
import {filterActions, loadActions} from "../store/action-creators/userActionActions";
import FilterInput from "../components/FilterInput";
import UserActionTable from "../components/UserActionTable/UserActionTable";
import {Button, ButtonGroup, NumericInput} from "@blueprintjs/core";
import MainTemplate from "../components/MainTemplate";

const ITEMS_PER_PAGE = 50; // Количество элементов на страницу

const TablePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1); // Текущая страница
    const totalPages = Math.ceil(userActionsData.length / ITEMS_PER_PAGE); // Общее количество страниц

    useEffect(() => {
        // Загружаем только текущую страницу данных
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const actions: IUserAction[] = userActionsData.slice(startIndex, endIndex);

        dispatch(loadActions(actions));
        dispatch(filterActions(""));
    }, [dispatch, page]);

    return (
        <MainTemplate>
            <div style={{padding: 20, paddingTop: 40, width: "100%", display: "flex", justifyContent: "center", minHeight: "88vh"}}>
                <div style={{width: 480}}>

                    <FilterInput/>
                    <UserActionTable/>

                    {/* Пагинация */}
                    <div style={{marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
                        <ButtonGroup>
                            <Button
                                icon="arrow-left"
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                            />
                            <NumericInput
                                min={1}
                                max={totalPages}
                                value={page}
                                onValueChange={(value) => setPage(Math.max(1, Math.min(value, totalPages)))}
                                style={{width: "50px"}}
                            />
                            <Button
                                icon="arrow-right"
                                disabled={page === totalPages}
                                onClick={() => setPage(page + 1)}
                            />
                        </ButtonGroup>
                        <span>из {totalPages} страниц</span>
                    </div>
                </div>
            </div>
        </MainTemplate>
    );
};

export default TablePage;