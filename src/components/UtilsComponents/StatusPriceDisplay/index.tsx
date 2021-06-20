import React, {useState, useEffect} from 'react';
import cx from "classnames"
import style from "./statusprice.module.scss"

type StatusPriceProps = {
	value: number
}

const StatusPriceDisplay: React.FC<StatusPriceProps> = ({ value }: StatusPriceProps) => {
	const [isPositive, setIsPositive] = useState(true);

	useEffect(()=>{
		if(value < 0){
			setIsPositive(false)
		}else{
			setIsPositive(true)
		}
	},[value])

	return (
		<div className={cx(style.container, isPositive ? style.positive : style.negative)}>
			<span>
				{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)} (%)
			</span>
		</div>
	);
}

export default StatusPriceDisplay;