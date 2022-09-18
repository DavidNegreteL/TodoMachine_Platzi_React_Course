import React from "react";
import * as Styled from './todoSearch.styled';

export const TodoSearch = ({searchValue, setSearchValue, loading}) => {
    const handleSearchChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <Styled.TodoSearch
            placeholder='Comprar carne'
            value={searchValue}
            onChange={handleSearchChange}
            disabled={loading}
        />
    );
}