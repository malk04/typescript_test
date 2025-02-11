import React, { useState } from "react";
import { InputGroup } from "@blueprintjs/core";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {filterActions} from "../store/action-creators/userActionActions";

// Компонент поисковой строки
const FilterInput: React.FC = () => {
    const [query, setQuery] = useState("");
    const dispatch = useAppDispatch();

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        dispatch(filterActions(event.target.value));
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <InputGroup
                placeholder="Поиск действий пользователей..."
                value={query}
                onChange={handleFilterChange}
            />
        </div>
    );
};

export default FilterInput;