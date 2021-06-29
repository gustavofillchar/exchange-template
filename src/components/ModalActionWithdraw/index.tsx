import React, { useState } from 'react';
import cx from "classnames"
import style from "./modalaction.module.scss"
import MakeWithdraw from '../MakeWithdraw';

type ActiveProps = {
    activeModal?: boolean,
    onHandleClose(): any
}

const ModalActionWithdraw: React.FC<ActiveProps> = ({activeModal = false, onHandleClose}:ActiveProps) => {

    return (
        <>
            <div onClick={onHandleClose} className={cx(style.backLayer, activeModal && style.backLayerOpen)} />
            <div className={cx(style.container, activeModal && style.containerShow)} >
                <div className={style.containItem}>
                    <MakeWithdraw/>
                </div>
            </div>
        </>
    );
}

export default ModalActionWithdraw;