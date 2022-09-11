import React from "react";
import  ReactDOM  from "react-dom";
import { GoX } from "react-icons/go";
import { TodoForm } from "../TodoForm/TodoForm";
import * as Styled from './Modal.styled';

function Modal(props) {
    const handleClickCreateButton = () => {
        props.setOpenModal(false);
    };
    return ReactDOM.createPortal(
        <Styled.Modal>
            <Styled.ModalContent>
                <Styled.ModalHeader>
                    <GoX onClick={handleClickCreateButton}/>
                    <h2>Escribe el nuevo TODO</h2>
                </Styled.ModalHeader>
                <Styled.ModalBody>
                    <TodoForm addTodo={props.addTodo} setOpenModal={props.setOpenModal}/>
                </Styled.ModalBody>
                <Styled.ModalFooter>
                    TODO MACHINE
                </Styled.ModalFooter>
            </Styled.ModalContent>
        </Styled.Modal>
        ,
        document.getElementById('modal')
    )
};

export {Modal};