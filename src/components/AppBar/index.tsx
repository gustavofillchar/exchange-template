import React, { useState } from 'react';
import Logo from "../Logo"
import cx from "classnames"
import style from './appbar.module.scss';
import profileExample from "../../assets/images/image.jpeg"

import notifications from "../../assets/images/notifications.svg"
import settings from "../../assets/images/settings.svg"
import { useHistory } from 'react-router-dom';

const AppBar: React.FC = () => {
	const [isCollapse, setCollapse] = useState(false)

	const handleMenu = () => {
		setCollapse(!isCollapse)
	}

	const handleNav = useHistory()

	return (
		<div className={style.container}>
			<div className={style.logoArea}>
				<Logo />
			</div>

			<div className={style.actionBox}>

				<div className={style.iconAction}>
					<img src={notifications} />
				</div>

				<div className={style.iconAction}>
					<img src={settings} />
				</div>

				<div className={style.profileFigureAction}>
					<img onClick={handleMenu} src={profileExample} />
					<h6 onClick={handleMenu}>Nome sobrenome</h6>
					<div className={style.arrowAction} onClick={handleMenu}/>

					<div className={cx(style.optionsMenu, isCollapse ? style.optionsMenuCollapsed : null)}>
						<a onClick={() => handleNav.push("/profile")}>Meu perfil</a>
						<a href="/signin">Sair</a>						
					</div>
				</div>
			</div>
		</div>
	);
}

export default AppBar;