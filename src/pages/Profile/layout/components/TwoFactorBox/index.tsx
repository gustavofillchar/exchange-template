import React from 'react';
import style from "./twoFactorBox.module.scss"

const TwoFactorBox: React.FC = () => {

	return (
		<div className={style.container}>

			<div className={style.header}>
				<h3>Verificação em duas etapas (2FA)</h3>
			</div>

			<div className={style.tableContainer}>

			</div>
		</div>
	);
}

export default TwoFactorBox;