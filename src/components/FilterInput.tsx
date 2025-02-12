import React from "react";
import {Icon, InputGroup} from "@blueprintjs/core";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { filterActions } from "../store/action-creators/userActionActions";

// Компонент поисковой строки
interface FilterInputProps {
    filterQuery: string;
    setFilterQuery: React.Dispatch<React.SetStateAction<string>>;
}

const FilterInput: React.FC<FilterInputProps> = ({ filterQuery, setFilterQuery }) => {
    const dispatch = useAppDispatch();

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFilterQuery(value);
        dispatch(filterActions(value));
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <InputGroup
                placeholder="Поиск действий пользователей..."
                value={filterQuery}
                onChange={handleFilterChange}
                leftIcon={<Icon icon="search" />}
            />
        </div>
    );
};

export default FilterInput;
