import React from 'react';

import style from "./buyorders.module.scss"
import ButtonSecondary from '../ButtonSecondary';
import DateWithHour from '../UtilsComponents/DateWithHour';
import CircleStatusIndicator from '../UtilsComponents/CircleStatusIndicator';

const BuyOrders: React.FC = () => {

	let testeDate =  Date.now();

	const RowsTableExample = [...Array(22)].map((_, i) => {
			return (
				<tr>
					<td>R$ 50,00</td>
					<td>81972389</td>
					<td><DateWithHour dateValue={testeDate}/></td>
				</tr>
			)
		}
	);

	return (
		<div className={style.container}>
			
			<div className={style.header}>					
				<h3>Ordens de Compra</h3>	
				<CircleStatusIndicator indicator={true}/>
			</div>

			<div className={style.tableContainer}>
				<table>
					<tr>
						<th>Preço</th>
						<th>Quantidade</th>
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

export default BuyOrders;