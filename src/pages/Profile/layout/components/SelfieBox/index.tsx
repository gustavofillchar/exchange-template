import React from 'react';
import SmallButton from '../../../../../components/SmallButton';
import style from "./selfieBox.module.scss"

const SelfieBox: React.FC = () => {

	return (
		<div className={style.container}>

			<div className={style.header}>
				<h3>Documento de Identificação</h3>
			</div>

			<div className={style.tableContainer}>
				<div className={style.formSendImage}>
					<h3>Atualizado há 5 meses</h3>
					<p>Tire uma selfie segurando seu documento de identificação</p>
					<div className={style.boxFileUpload}>
						<div className={style.iconUpload} />
						<input className={style.typeFile} type="file" id="fileAdd" accept="image/png, image/jpeg" />
					</div>
				</div>
				<SmallButton blue onPress={() => alert("Cadastrar")}>Cadastrar</SmallButton>

			</div>
		</div>
	);
}

export default SelfieBox;