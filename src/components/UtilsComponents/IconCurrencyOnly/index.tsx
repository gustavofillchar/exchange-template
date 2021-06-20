import React from 'react';

import style from './currencyWithIcon.module.scss';

type CurrecyProps = {
    iconName: string,
    iconType:boolean
}

const IconCurrencyOnly: React.FC<CurrecyProps> = ({ iconName, iconType }: CurrecyProps) => {

    const styleWhite = { backgroundImage: `url(/icons/coins/${iconName}.svg)` }
    const styleBlack = { backgroundImage: `url(/icons/coins/black/${iconName}.svg)` }

    return (
        <div className={style.container}>
            <div className={style.icon} style={iconType ? styleWhite : styleBlack} />
        </div>
    );
}

export default IconCurrencyOnly;