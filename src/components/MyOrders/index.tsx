import React from 'react';

import style from "./myorders.module.scss"
import ButtonSecondary from '../ButtonSecondary';
import DateWithHour from '../UtilsComponents/DateWithHour';
import SelectorTableButton from '../UtilsComponents/SelectorTableButton';
import CircleStatusIndicator from '../UtilsComponents/CircleStatusIndicator';
import PriceFormat from '../UtilsComponents/PriceFormat';

const MyOrders: React.FC = () => {

	let testeDate =  Date.now();

	const RowsTableExample = [...Array(22)].map((_, i) => {
			return (
				<tr>
					<td>
						<div className={style.priceItem}>
							<CircleStatusIndicator indicator={true}/>
							<span><PriceFormat value={8382.237752344563463}/></span>
						</div>
					</td>
					<td>1889</td>
					<td><DateWithHour dateValue={testeDate}/></td>
				</tr>
			)
		}
	);

	return (
		<div className={style.container}>
			
			<div className={style.header}>					
				<h3>Minhas ordens</h3>	
				<SelectorTableButton/>
			</div>

			<div className={style.tableContainer}>
				<table>
					<tr>
						<th>Preço</th>
						<th>Quant.</th>
						<th>Data/Hora</th>
					</tr>

					{RowsTableExample}

				</table>

				<div className={style.seeMoreButton}>
					<ButtonSecondary onPress={() => alert("Ver mais")} secondaryBtn={true}>Ver mais</ButtonSecondary>
				</div>

			</div>
		</div>
	);
}

export default MyOrders;