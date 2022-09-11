import React from "react";
import * as Styled from './todoList.styled';

export const TodoList = (props) => {
    return (
        <Styled.TodoList>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos.length && props.onEmpty())}
            {props.searchedTodos.map(todo => props.render(todo))}
            {props.children}
        </Styled.TodoList>
    );
}