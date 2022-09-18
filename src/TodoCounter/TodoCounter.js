import React from "react";
import * as Styled from './todoCounter.styled';

export const TodoCounter = ({totalTodos, completedTodos, loading}) => {
    return (
        <Styled.TodoCounter>
            Has completado {completedTodos} de {totalTodos} TODO's
        </Styled.TodoCounter>
    );
};