import React, { useState } from 'react';
import cx from "classnames"
import style from './sidebar.module.scss';
import {NavLink} from "react-router-dom"

const Sidebar: React.FC = () => {
	const [collapse, setCollapse] = useState(false)

	const handleSideMenu = () => {
		setCollapse(!collapse)
	}

	return (
		<>
			<div className={cx(style.container, collapse ?  style.sideOpen : null)}>

				<div onClick={handleSideMenu} className={cx(style.headerHandleMenu, collapse ?  style.headerClose : style.headerOpen)}/>


				<NavLink to="/dashboard" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon1)}/>
					<span>Dashboard</span>
				</NavLink>

				<NavLink to="/market" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon2)}/>
					<span>Mercados</span>
				</NavLink>

				<NavLink to="/wallet" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon3)}/>
					<span>Carteiras</span>
				</NavLink>

				<NavLink to="/orders" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon4)}/>
					<span>Ordens</span>
				</NavLink>

				<NavLink to="/extract" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon5)}/>
					<span>Extrato</span>
				</NavLink>

				<NavLink to="/deposit" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon6)}/>
					<span>Depósitos</span>
				</NavLink>

				<NavLink to="/withdraw" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon7)}/>
					<span>Saques</span>
				</NavLink>

				<NavLink to="/help" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon8)}/>
					<span>Suporte</span>
				</NavLink>

			</div>
			<div onClick={handleSideMenu} className={cx(style.backLayer, collapse ? style.backLayerOpen : null)}/>
		</>
	);
}

export default Sidebar;