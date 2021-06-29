import React from 'react';
import style from "./makedeposit.module.scss"
import imageExample from "../../assets/icons/sample.png"
import SmallButton from '../SmallButton';

const MakeDeposit: React.FC = () => {

	return (
		<div className={style.container}>

			<div className={style.header}>
				<h3>Dados para depósito</h3>
			</div>

			<div className={style.containerItem}>

				<div className={style.selectBankContainer}>
					<div className={style.iconLeft} />
					<div className={style.iconRight} />

					<div className={style.bankItem}>

						<div className={style.bankImage}>
							<img src={imageExample} alt="Logo do Banco" />
						</div>

						<div className={style.descriptionBox}>
							<span><b>Agência:</b> 0001</span>
							<span><b>Conta:</b> 883892-1</span>
							<span><b>PIX - CNPJ:</b> 19.789.073.0001/32</span>
						</div>

					</div>

				</div>

				<div className={style.infoDepositContainer}>
					<h4>Fez um depósito?</h4>

					<p>Por favor, informe o valor e envie o comprovante abaixo.</p>

					<input type="text" className={style.inputValue} placeholder="Digite o valor do depósito" />

					<div className={style.boxFileUpload}>
						<div className={style.iconUpload} />
						<input className={style.typeFile} type="file" id="fileAdd" accept="image/png, image/jpeg" />
					</div>

					<SmallButton
						blue={true}
						green={false}
						red={false}
						onPress={() => alert("Fazer envio formulário")}
					>
						Enviar
					</SmallButton>

				</div>


			</div>

		</div>
	);
}

export default MakeDeposit;