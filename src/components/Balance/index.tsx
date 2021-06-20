import React from 'react';

import style from "./balance.module.scss"

import ButtonSecondary from '../ButtonSecondary';

const Balance: React.FC = () => {
    return (
        <div className={style.container}>
            <span>Saldo em <b>R$</b></span>
            <h2><span>R$</span> 290,00</h2>

            <div className={style.groupButtons}>
                <ButtonSecondary secondaryBtn={false} onPress={() => alert("Depositar")}>Depositar</ButtonSecondary>
                <ButtonSecondary secondaryBtn={true} onPress={() => alert("Saque")}>Saque</ButtonSecondary>
            </div>
        </div>
    );
}

export default Balance;