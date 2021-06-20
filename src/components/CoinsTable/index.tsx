import React from 'react';

import style from "./coinstable.module.scss"
import CurrencyWithIcon from '../UtilsComponents/CurrencyWithIcon';
import ButtonSecondary from '../ButtonSecondary';
import StatusPriceDisplay from '../UtilsComponents/StatusPriceDisplay';
import StatusPercentage from '../UtilsComponents/StatusPercentage';

import SelectorTableButton from '../UtilsComponents/SelectorTableButton';
import SmallButton from '../SmallButton';

const CoinsTable: React.FC = () => {

	const RowsTableExample = [...Array(22)].map((_, i) => {
			return (
				<tr>
					<td>
						<CurrencyWithIcon iconName="xrp" currency="Ripple" />
					</td>
					<td><StatusPercentage value={81.289023450293}/></td> 
					<td>R$ 50,00</td>
					<td>R$ 50,00</td>
					<td>R$ 50,00</td>
					<td>R$ 50,00</td>
				</tr>
			)
		}
	);

	return (
		<div className={style.container}>
			
			<div className={style.header}>					
				<h3>Moedas</h3>
				<StatusPercentage value={-83.0184}/>	
				<SelectorTableButton/>
			</div>

			<div className={style.tableContainer}>
				<table>
					<tr>
						<th>Moeda</th>
						<th>Variação</th>
						<th>Última</th>
						<th>Maior</th>
						<th>Menor</th>
						<th>Volume</th>
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

export default CoinsTable;