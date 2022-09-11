import React from "react";
import * as Styled from './createTodoButton.styled';

export const CreateTodoButton = (props) => {
    const handleClickCreateButton = () => {
        props.setOpenModal(true);
    };

    return (
        <Styled.CreateTodoButton
            onClick={handleClickCreateButton}
        >
            {props.children}
        </Styled.CreateTodoButton>
    );
}