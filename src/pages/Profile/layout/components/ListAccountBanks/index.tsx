import React from 'react';
import style from "./listAccount.module.scss"

const ListAccountBanks: React.FC = () => {
	var testDate = Date.now();

	const RowsTableExample = [...Array(2)].map((_, i) => {
		return (
			<tr>
				<td>Banco Inter</td>
				<td>0001</td>
				<td>99029-2</td>
				<td>-</td>
				<td>07820303010</td>
				<td>-</td>
				<td>-</td>
			</tr>
		)
	}
	);

	return (
		<div className={style.container}>

			<div className={style.header}>
				<h3>Cadastrar conta bancária</h3>
			</div>

			<div className={style.tableContainer}>
			<table>
					<tr>
						<th>Banco</th>
						<th>Agência</th>
						<th>Conta</th>
						<th>Op</th>
						<th>Pix</th>
						<th>Editar</th>
						<th>Excluir</th>
					</tr>


					{RowsTableExample}


				</table>

			</div>
		</div>
	);
}

export default ListAccountBanks;