import React from "react";
import * as Styled from './todoList.styled';

export const TodoList = (props) => {
    return (
        <Styled.TodoList>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos && props.onEmpty())}
            {(props.totalTodos && !props.searchedTodos.length && props.onEmptySearchResults())}
            {props.searchedTodos.map(props.children)}
            {props.children}
        </Styled.TodoList>
    );
}