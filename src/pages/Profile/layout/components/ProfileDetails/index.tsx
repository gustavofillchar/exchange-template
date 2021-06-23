import React from 'react';
import InputPrimaryDisabled from '../../../../../components/InputPrimaryDisabled';
import profileExample from "../../../../../assets/images/image.jpeg"
import style from "./profileDetails.module.scss"

const ProfileDetails: React.FC = () => {

	return (
		<div className={style.container}>

			<div className={style.header}>
				<h3>Perfil</h3>
			</div>

			<div className={style.tableContainer}>
				
				<div className={style.photoProfile}>
					<img src={profileExample} alt="Foto Perfil" />
				</div>

				<div className={style.containFormProfile}>
					<InputPrimaryDisabled
						labelValue="Nome"
						value="Pablo Lima"
						placeholder=""
					/>

					<InputPrimaryDisabled
						labelValue="CPF"
						value="067.987.234-92"
						placeholder=""
					/>

					<InputPrimaryDisabled
						labelValue="Data de nascimento"
						value="02/12/1992"
						placeholder=""
					/>

					<InputPrimaryDisabled
						labelValue="E-mail"
						value="meuemail@gmail.com"
						placeholder=""
					/>

					<InputPrimaryDisabled
						labelValue="Telefone"
						value="(35) 99392-1214"
						placeholder=""
					/>

				</div>
			</div>
		</div>
	);
}

export default ProfileDetails;