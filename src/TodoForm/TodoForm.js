import React from "react";
import { useState } from "react";
import { useTodos } from "../useTodos";
import * as Styled from './TodoForm.styled';

export const TodoForm = ({addTodo, setOpenModal}) => {
    const [newTodoValue, setNewTodoValue] = useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <Styled.Form onSubmit={onSubmit}>
            <Styled.TextArea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe el TODO"
            />
            <Styled.ButtonsContainer>
                <Styled.Button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </Styled.Button>
                <Styled.Button
                    type="submit"
                >
                    Añadir
                </Styled.Button>
            </Styled.ButtonsContainer>
        </Styled.Form>
    );
};