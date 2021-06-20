import React from 'react';

import style from "./stylesExtractCoinSelected.module.scss"
import CurrencyWithIcon from '../../../../../components/UtilsComponents/CurrencyWithIcon';
import DateWithHour from '../../../../../components/UtilsComponents/DateWithHour';
import DownloadIcon from '../../../../../components/UtilsComponents/DownloadIcon';
import CircleStatusIndicator from '../../../../../components/UtilsComponents/CircleStatusIndicator';
import ButtonSecondary from '../../../../../components/ButtonSecondary';

const ExtractCoinSelected: React.FC = () => {

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
				<td>Depósito em conta</td>
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
				<h3>Extrato da Carteira (selecionada)</h3>
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

export default ExtractCoinSelected;