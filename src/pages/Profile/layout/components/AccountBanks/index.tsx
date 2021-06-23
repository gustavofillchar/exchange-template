import React from 'react';
import ButtonPrimary from '../../../../../components/ButtonPrimary';
import SmallButton from '../../../../../components/SmallButton';
import style from "./accountbanks.module.scss"

const AccountBanks: React.FC = () => {

	return (
		<div className={style.container}>

			<div className={style.header}>
				<h3>Cadastrar conta bancária</h3>
			</div>

			<div className={style.tableContainer}>

				<div className={style.formGroupItem}>
					<label>Banco</label>
					<input placeholder="Digite aqui"/>
				</div>
				<div className={style.formGroupItem}>
					<label>Agência</label>
					<input placeholder="Digite aqui"/>
				</div>
				<div className={style.formGroupItem}>
					<label>Conta</label>
					<input placeholder="Digite aqui"/>
				</div>
				<div className={style.formGroupItem}>
					<label>Op</label>
					<input placeholder="Digite aqui"/>
				</div>
				<div className={style.formGroupItem}>
					<label>Chave PIX</label>
					<input placeholder="Digite aqui"/>
				</div>

				<SmallButton blue onPress={() => alert("Cadastrar")}>Cadastrar</SmallButton>

			</div>
		</div>
	);
}

export default AccountBanks;