import React from "react";
import * as Styled from './TodoHeader.styled';

export const TodoHeader = ({children}) => {
    return (
        <Styled.Header>
            {children}
        </Styled.Header>
    );
};