import React, { useEffect } from "react";
import FilterInput from "./components/FilterInput";
import UserActionTable from "./components/UserActionTable";
import {useAppDispatch} from "./hooks/redux";
import {UserActionSlice} from "./store/reducers/UserActionSlice";
import {IUserAction} from "./types/IUserAction";

const App: React.FC = () => {
    const { loadActions, filterActions } = UserActionSlice.actions;
    const dispatch = useAppDispatch();

  useEffect(() => {
    // Имитируем загрузку данных
    const actions: IUserAction[] = [
      {
        username: "user-001",
        action: "logged_in",
        action_created_at: "2022-05-08T07:01:09.171245Z",
      },
      {
        username: "user-002",
        action: "button_sign_in_tapped",
        action_created_at: "2022-05-08T07:02:09.171245Z",
      },
      {
        username: "user-003",
        action: "button_log_out_tapped",
        action_created_at: "2022-05-08T07:03:09.171245Z",
      },
      // Дополни еще действиями
    ];
      dispatch(loadActions(actions));
      dispatch(filterActions(""));
  }, [dispatch, loadActions, filterActions]);

  return (
      <div style={{ padding: "20px" }}>
        <h1>User Actions</h1>
        <FilterInput />
        <UserActionTable />
      </div>
  );
};

export default App;