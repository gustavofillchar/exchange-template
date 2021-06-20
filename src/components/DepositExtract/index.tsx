import React from 'react';

import style from "./depositextractTable.module.scss"
import CurrencyWithIcon from '../UtilsComponents/CurrencyWithIcon';
import DateWithHour from '../UtilsComponents/DateWithHour';
import ButtonSecondary from '../ButtonSecondary';
import DownloadIcon from '../UtilsComponents/DownloadIcon';
import CircleStatusIndicator from '../UtilsComponents/CircleStatusIndicator';

const DepositExtract: React.FC = () => {

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
				<h3>Meus depósitos</h3>
				<CircleStatusIndicator indicator={true} />
			</div>

			<div className={style.tableContainer}>
				<table>
					<tr>
						<th>Data</th>
						<th>Moeda</th>
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

export default DepositExtract;