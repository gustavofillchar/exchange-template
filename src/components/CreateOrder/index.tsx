import React, { useState } from 'react';
import cx from "classnames"
import style from "./createOrder.module.scss"
import PriceFormat from '../UtilsComponents/PriceFormat';

interface Provider { }

const CreateOrder: React.FC = () => {

    const [isBuyType, setIsBuyType] = useState(true)
    const [orderType, setOrderType] = useState(false)
    const [unitPrice, setUnitPrice] = useState(0)

    const handleBuy = () => {
        setIsBuyType(true)
    }

    const handleSell = () => {
        setIsBuyType(false)
    }

    const handleTypeMarket = () => {
        setOrderType(!orderType)
    }


    return (
        <div className={style.container}>
            <div className={style.header}>
                <h3>Negociação</h3>
            </div>
            <div className={style.contain}>

                <div className={cx(style.selectButtons, isBuyType ? style.buySelect : style.sellSelect)}>
                    <button className={style.btnBuy} onClick={handleBuy}>Comprar</button>
                    <button className={style.btnSell} onClick={handleSell}>Vender</button>
                </div>

                <div className={style.balanceStatus}>
                    <span>Saldo disponível</span>
                    <h3><PriceFormat value={8923} /></h3>
                </div>

                <div className={style.typeOrderContain}>
                    <label htmlFor="unitPrice">Tipo de ordem</label>
                    <div className={cx(style.orderType, orderType ? style.marketSelect : style.limitSelect)}>
                        <button className={style.btnMarket} onClick={handleTypeMarket}>Mercado</button>
                        <button className={style.btnLimited} onClick={handleTypeMarket}>Limitada</button>
                    </div>
                </div>

                <div className={style.unitPriceContain}>
                    <label htmlFor="buysellinput">Valor da compra</label>
                    <input type="text" id="buysellinput" value={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(1324)} />

                </div>


                <div className={style.unitPriceContain}>
                    <label htmlFor="unitPrice">Preço unitário</label>
                    <input type="text" id="unitPrice" value={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(124)} />
                </div>

                <button className={cx(style.actionButton, isBuyType ? style.buySelected : style.sellSelected)}>
                    {isBuyType ? "Comprar" : "Vender"}
                </button>

            </div>
        </div>
    );
}

export default CreateOrder;