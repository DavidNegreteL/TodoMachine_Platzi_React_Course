import React from "react";
import * as Styled from './createTodoButton.styled';

export const CreateTodoButton = (props) => {
    return (
        <Styled.CreateTodoButton>
            {props.children}
        </Styled.CreateTodoButton>
    );
}