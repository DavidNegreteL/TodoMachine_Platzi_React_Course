import React from "react";
import { GoCheck, GoTrashcan } from "react-icons/go";
import * as Styled from './todoItem.styled';

export const TodoItem = (props) => {
    return (
        <Styled.TodoItem completed={props.completed}>
            <Styled.ItemDoneButton completed={props.completed}>
                <GoCheck/>
            </Styled.ItemDoneButton>
            {props.children}
            <Styled.ItemDeleteButton>
                <GoTrashcan/>
            </Styled.ItemDeleteButton>
        </Styled.TodoItem>
    );
}