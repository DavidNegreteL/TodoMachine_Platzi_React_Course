import React from "react";
import * as Styled from './todoList.styled';

export const TodoList = (props) => {
    return (
        <Styled.TodoList>
            {props.children}
        </Styled.TodoList>
    );
}