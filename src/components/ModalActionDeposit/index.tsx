import React, { useState } from 'react';
import cx from "classnames"
import style from "./modalaction.module.scss"
import MakeDeposit from '../MakeDeposit';

type ActiveProps = {
    activeModal?: boolean,
    onHandleClose(): any
}

const ModalActionDeposit: React.FC<ActiveProps> = ({activeModal = false, onHandleClose}:ActiveProps) => {

    return (
        <>
            <div onClick={onHandleClose} className={cx(style.backLayer, activeModal && style.backLayerOpen)} />
            <div className={cx(style.container, activeModal && style.containerShow)} >
                <div className={style.containItem}>
                    <MakeDeposit/>
                </div>
            </div>
        </>
    );
}

export default ModalActionDeposit;