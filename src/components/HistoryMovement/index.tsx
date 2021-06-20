import React from 'react';

import style from "./historymovement.module.scss"
import CurrencyWithIcon from '../UtilsComponents/CurrencyWithIcon';
import DateWithHour from '../UtilsComponents/DateWithHour';
import ButtonPrimary from '../ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary';
import DownloadIcon from '../UtilsComponents/DownloadIcon';

const HistoryMovement: React.FC = () => {

	var testDate = Date.now();

	const RowsTableExample = [...Array(18)].map((_, i) => {
		return (
			<tr>
				<td>
					<DateWithHour dateValue={testDate} />
				</td>
				<td>
					<CurrencyWithIcon iconName="brl" currency="Real" />
				</td>
				<td>Deposito bancário</td>
				<td>R$ 50,00</td>
				<td>R$ 50,00</td>
				<td>Confirmado</td>
				<td><DownloadIcon onPress={() => alert("Donwload comprovante")} /></td>
			</tr>
		)
	}
	);

	return (
		<div className={style.container}>
			<div className={style.header}>
				<h3>Movimentação</h3>
			</div>

			<div className={style.tableContainer}>
				<table>
					<tr>
						<th>Data</th>
						<th>Moeda</th>
						<th>Transação</th>
						<th>Valor</th>
						<th>Saldo</th>
						<th>Status</th>
						<th>Comprovante</th>
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

export default HistoryMovement;