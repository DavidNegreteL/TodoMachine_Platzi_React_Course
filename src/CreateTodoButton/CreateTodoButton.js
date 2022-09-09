import React from "react";
import * as Styled from './createTodoButton.styled';

export const CreateTodoButton = (props) => {
    const handleClickCreateButton = () => {
        alert('Clickeaste el btn')
    };

    return (
        <Styled.CreateTodoButton
            onClick={handleClickCreateButton}
        >
            {props.children}
        </Styled.CreateTodoButton>
    );
}