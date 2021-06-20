import React from 'react';
import style from "./makewithdraw.module.scss"
import imageExample from "../../assets/icons/sample.png"
import SmallButton from '../SmallButton';

const MakeWithdraw: React.FC = () => {

	return (
		<div className={style.container}>
			
			<div className={style.header}>					
				<h3>Dados para saque</h3>
			</div>

			<div className={style.containerItem}>
				
				<div className={style.selectBankContainer}>
					<div className={style.iconLeft}/>
					<div className={style.iconRight}/>

					<div className={style.bankItem}>
						
						<div className={style.bankImage}>
							<img src={imageExample} alt="Logo do Banco"/>
						</div>

						<div className={style.descriptionBox}>
							<span><b>Agência:</b> 0001</span>
							<span><b>Conta:</b> 883892-1</span>
							<span><b>PIX - CNPJ:</b> 19.789.073.0001/32</span>
						</div>

					</div>

				</div>

				<div className={style.infoDepositContainer}>
					<h4>Informe um valor</h4>
					
					<p>Enviaremos um comprovante assim que possível</p>

					<input type="text" className={style.inputValue} placeholder="Digite o valor do saque"/>

					<SmallButton
						blue={true}
						green={false}
						red={false}
						onPress={() => alert("Fazer envio formulário")}
					>
						Realizar saque
					</SmallButton>

				</div>
				

			</div>

		</div>
	);
}

export default MakeWithdraw;