import React, { useState } from 'react';
import cx from "classnames"
import style from './sidebar.module.scss';

const Sidebar: React.FC = () => {
	const [collapse, setCollapse] = useState(false)

	const handleSideMenu = () => {
		setCollapse(!collapse)
	}

	return (
		<>
			<div className={cx(style.container, collapse ?  style.sideOpen : null)}>
				<h3 onClick={handleSideMenu}>X</h3>
			</div>
			<div onClick={handleSideMenu} className={cx(style.backLayer, collapse ? style.backLayerOpen : null)}/>
		</>
	);
}

export default Sidebar;