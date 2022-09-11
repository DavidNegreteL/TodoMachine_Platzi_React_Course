import React from "react";
import * as Styled from './todoSearch.styled';

export const TodoSearch = ({searchValue, setSearchValue}) => {
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