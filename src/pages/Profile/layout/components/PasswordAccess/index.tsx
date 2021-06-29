import React,{useState} from 'react';
import ButtonPrimary from '../../../../../components/ButtonPrimary';
import InputPrimary from '../../../../../components/InputPrimary';
import style from "./PasswordAccess.module.scss"

const PasswordAccess: React.FC = () => {
	const [oldPassword, setOldPassword] = useState("")
	
	return (
		<div className={style.container}>

			<div className={style.header}>
				<h3>Senha de acesso</h3>
			</div>

			<div className={style.itemContain}>
				<InputPrimary isPasswordType value={oldPassword} onChangeText={setOldPassword} placeholder="Digite sua senha" labelValue="Senha atual"/>
				<InputPrimary isPasswordType value={oldPassword} onChangeText={setOldPassword} placeholder="Digite sua nova senha" labelValue="Nova senha"/>
				<InputPrimary isPasswordType value={oldPassword} onChangeText={setOldPassword} placeholder="Confirme sua nova senha" labelValue="Confirme a senha"/>
				<ButtonPrimary onPress={() => alert("Salvar")}>Salvar</ButtonPrimary>
			</div>
		</div>
	);
}

export default PasswordAccess;