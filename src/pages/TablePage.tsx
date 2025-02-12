import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch";
import userActionsData from "../data/db.json";
import {filterActions, loadActions, pageActions} from "../store/action-creators/userActionActions";
import FilterInput from "../components/FilterInput";
import UserActionTable from "../components/UserActionTable/UserActionTable";
import MainTemplate from "../components/MainTemplate";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Pagination from "../components/Pagination";

const ITEMS_PER_PAGE = 20; // Количество элементов на страницу

const TablePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [filterQuery, setFilterQuery] = useState(""); // Значение поиска
    const [page, setPage] = useState(1); // Текущая страница

    const filteredActions = useTypedSelector((state) => state.userActions.filteredUserActions);
    const totalPages = filteredActions.length ? Math.ceil(filteredActions.length / ITEMS_PER_PAGE) : 1; // Общее количество страниц

    useEffect(() => {
        dispatch(loadActions(userActionsData));
        dispatch(filterActions(filterQuery));
        dispatch(pageActions(page))
    }, [dispatch, page, filterQuery]);

    return (
        <MainTemplate>
            <div style={{padding: 20, paddingTop: 40, width: "100%", display: "flex", justifyContent: "center", minHeight: "88vh"}}>
                <div style={{width: 480}}>
                    <FilterInput filterQuery={filterQuery}
                                 setFilterQuery={setFilterQuery} />
                    <UserActionTable/>
                    <Pagination page={page}
                                setPage={setPage}
                                totalPages={totalPages} />
                </div>
            </div>
        </MainTemplate>
    );
};

export default TablePage;