import React from "react";
import * as Styled from './ChangeAlert.styled';
import { GoSync } from 'react-icons/go';
import { withStorageListener } from "./withStorageListener";

const ChangeAlert = ({show, toggleShow}) => {
    if(show) {
        return (
            <Styled.AlertCard>
                <Styled.CardTitleSection>
                    <Styled.CardTitle>Hubo cambios</Styled.CardTitle>
                </Styled.CardTitleSection>
                <Styled.CardActionSection>
                    Actualizar
                    <Styled.CardButton onClick={() => toggleShow(false)}>
                        <GoSync/>
                    </Styled.CardButton>
                </Styled.CardActionSection>
            </Styled.AlertCard>
        );
    } else {
        return null
    }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }