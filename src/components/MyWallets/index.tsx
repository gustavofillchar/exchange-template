import React from 'react';

import style from "./mywallets.module.scss"
import CurrencyWithIcon from '../UtilsComponents/CurrencyWithIcon';
import DateWithHour from '../UtilsComponents/DateWithHour';
import ButtonSecondary from '../ButtonSecondary';
import DownloadIcon from '../UtilsComponents/DownloadIcon';
import StatusPriceDisplay from '../UtilsComponents/StatusPriceDisplay';
import SelectorTableButton from '../UtilsComponents/SelectorTableButton';
import SmallButton from '../SmallButton';

const MyWallets: React.FC = () => {

	var testDate = Date.now();

	const RowsTableExample = [...Array(22)].map((_, i) => {
			return (
				<tr>
					<td>
						<CurrencyWithIcon iconName="btc" currency="Bitcoin" />
					</td>
					<td>R$ 50,00</td>
					<td>R$ 50,00</td>
					<td>
						<div className={style.groupButtonsList}>
							<SmallButton red={false} blue={false} green={true} onPress={() => alert("Botao")}>Comprar</SmallButton>
							<SmallButton red={true} blue={false} green={false} onPress={() => alert("Botao")}>Vender</SmallButton>
							<SmallButton red={false} blue={true} green={false} onPress={() => alert("Botao")}>Endereço</SmallButton>
						</div>
					</td>
				</tr>
			)
		}
	);

	return (
		<div className={style.container}>
			
			<div className={style.header}>			
				<div className={style.headerinline}>
					<h3>Minhas Carteiras</h3>
					<StatusPriceDisplay value={122412}/>	
				</div>		
				<div className={style.headerinline}>
					<SelectorTableButton/>
					<SelectorTableButton/>
				</div>
			</div>

			<div className={style.tableContainer}>
				<table>
					<tr>
						<th>Moeda</th>
						<th>Valor</th>
						<th>%</th>
						<th>Acões</th>
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

export default MyWallets;