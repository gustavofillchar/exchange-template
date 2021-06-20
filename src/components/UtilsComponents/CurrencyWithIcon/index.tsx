import React from 'react';

import style from './currencyWithIcon.module.scss';
type CurrecyProps = {
    currency: string,
    iconName: string,
    hover?:boolean
}

const CurrencyWithIcon: React.FC<CurrecyProps> = ({ currency, iconName, hover = false }: CurrecyProps) => {

    const styleBG = { backgroundImage: `url(/icons/coins/${iconName}.svg)` }
    const styleBlackHover = { backgroundImage: `url(/icons/coins/black/${iconName}.svg)` }

    return (
        <div className={style.container}>
            <div className={style.icon} style={!hover ? styleBG : styleBlackHover} />
            <div className={style.labelInfo}>
                <h1>{currency}</h1>
                <h2>{iconName}</h2>
            </div>
        </div>
    );
}


export default CurrencyWithIcon;
