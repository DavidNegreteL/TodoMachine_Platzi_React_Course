import React from "react";
import * as Styled from './todoCard.styled';

export const TodoCard = (props) => {
    return (
        <Styled.TodoCard>
            {props.children}
        </Styled.TodoCard>
    );
}