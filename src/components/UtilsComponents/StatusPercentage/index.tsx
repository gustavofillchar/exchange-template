import React, {useState, useEffect} from 'react';
import cx from "classnames"
import style from "./statuspercentage.module.scss"

type StatusPriceProps = {
	value: number
}

const StatusPercentage: React.FC<StatusPriceProps> = ({ value }: StatusPriceProps) => {
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
				{value.toFixed(2)}%
			</span>
		</div>
	);
}

export default StatusPercentage;