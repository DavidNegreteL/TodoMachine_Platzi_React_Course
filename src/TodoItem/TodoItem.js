import React from "react";
import * as Styled from './todoItem.styled';

export const TodoItem = (props) => {
    return (
        <Styled.TodoItem>
            {props.children}
        </Styled.TodoItem>
    );
}