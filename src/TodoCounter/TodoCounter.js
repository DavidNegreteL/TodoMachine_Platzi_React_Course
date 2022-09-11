import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import * as Styled from './todoCounter.styled';

export const TodoCounter = () => {
    const {totalTodos, completedTodos} = useContext(TodoContext);
    return (
        <Styled.TodoCounter>
            Has completado {completedTodos} de {totalTodos} TODO's
        </Styled.TodoCounter>
    );
};