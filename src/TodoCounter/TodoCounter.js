import React from "react";
import * as Styled from './todoCounter.styled';

export const TodoCounter = ({total, completed}) => {
    return (
        <Styled.TodoCounter>
            Has completado {completed} de {total} TODO's
        </Styled.TodoCounter>
    );
};