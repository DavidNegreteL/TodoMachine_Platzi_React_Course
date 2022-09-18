import React from "react";
import * as Styled from './EmptySearchResults.styled';

export const EmptySearchResults = ({searchedText}) => {
    return (
        <Styled.EmptyResultsText> No hay resultados para {searchedText} </Styled.EmptyResultsText>
    );
};