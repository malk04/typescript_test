import React, { useState } from "react";
import { InputGroup, Button } from "@blueprintjs/core";
import {useAppDispatch} from "../hooks/redux";
import {UserActionSlice} from "../store/reducers/UserActionSlice";

const FilterInput: React.FC = () => {
    const [query, setQuery] = useState("");
    const { filterActions } = UserActionSlice.actions;
    const dispatch = useAppDispatch();

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        dispatch(filterActions(event.target.value));
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <InputGroup
                placeholder="Filter actions..."
                value={query}
                onChange={handleFilterChange}
            />
        </div>
    );
};

export default FilterInput;