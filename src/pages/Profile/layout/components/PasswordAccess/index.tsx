import React from 'react';
import style from "./PasswordAccess.module.scss"

const PasswordAccess: React.FC = () => {

	return (
		<div className={style.container}>

			<div className={style.header}>
				<h3>Senha de acesso</h3>
			</div>

			<div className={style.tableContainer}>

			</div>
		</div>
	);
}

export default PasswordAccess;