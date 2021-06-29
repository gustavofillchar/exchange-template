import React,{useState} from 'react';
import QRCode from 'react-qr-code';
import ButtonPrimary from '../../../../../components/ButtonPrimary';
import InputPrimary from '../../../../../components/InputPrimary';
import style from "./twoFactorBox.module.scss"

const TwoFactorBox: React.FC = () => {

	const [code, setCode] = useState("")

	return (
		<div className={style.container}>

			<div className={style.header}>
				<h3>Verificação em duas etapas (2FA)</h3>
			</div>

			<div className={style.tableContainer}>
				<QRCode value="9201047912790" size={100}/>
				<InputPrimary standard placeholder="Digite o código de verificação" labelValue="Código de dois fatores" value={code} onChangeText={setCode}/>
				<ButtonPrimary onPress={() => alert("Salvar")}>Salvar</ButtonPrimary>
			</div>

		</div>
	);
}

export default TwoFactorBox;