import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import * as Styled from './todoSearch.styled';

export const TodoSearch = () => {
    const {searchValue, setSearchValue} = useContext(TodoContext);
    const handleSearchChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <Styled.TodoSearch
            value={searchValue}
            onChange={handleSearchChange}
        />
    );
}