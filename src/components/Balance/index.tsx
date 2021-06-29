import React,{useState} from 'react';

import style from "./balance.module.scss"

import ButtonSecondary from '../ButtonSecondary';
import ModalActionDeposit from '../ModalActionDeposit';
import ModalActionWithdraw from '../ModalActionWithdraw';

const Balance: React.FC = () => {

    const [activeModalDeposit, setActiveModalDeposit] = useState(false)
    const [activeModalWithdraw, setActiveModalWithdraw] = useState(false)

    const handleCloseDeposit = () => {
        setActiveModalDeposit(false)
    }
    
    const handleModalDeposit = () => {
        setActiveModalDeposit(!activeModalDeposit)
    }

    const handleCloseWithdraw = () => {
        setActiveModalWithdraw(false)
    }
    
    const handleModalWithdraw = () => {
        setActiveModalWithdraw(!activeModalWithdraw)
    }

    return (
        <div className={style.container}>
            <ModalActionDeposit activeModal={activeModalDeposit} onHandleClose={handleCloseDeposit}/>
            <ModalActionWithdraw activeModal={activeModalWithdraw} onHandleClose={handleCloseWithdraw}/>
            
            <span>Saldo em <b>R$</b></span>
            <h2><span>R$</span> 290,00</h2>

            <div className={style.groupButtons}>
                <ButtonSecondary secondaryBtn={false} onPress={handleModalDeposit}>Depositar</ButtonSecondary>
                <ButtonSecondary secondaryBtn={true} onPress={handleModalWithdraw}>Saque</ButtonSecondary>
            </div>
        </div>
    );
}

export default Balance;