import React, { useState } from 'react';
import cx from "classnames"
import style from './sidebar.module.scss';
import {NavLink} from "react-router-dom"

const Sidebar: React.FC = () => {

	const [collapse, setCollapse] = useState(false)

	const handleSideMenu = () => {
		setCollapse(!collapse)
	}

	const handleClose = () => {
		setCollapse(false)
	}

	return (
		<>
			<div className={cx(style.container, collapse ?  style.sideOpen : null)}>

				<div onClick={handleSideMenu} className={cx(style.headerHandleMenu, collapse ?  style.headerClose : style.headerOpen)}/>

				<NavLink onClick={handleClose} to="/dashboard" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon1)}/>
					<span>Dashboard</span>
				</NavLink>

				<NavLink onClick={handleClose} to="/market" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon2)}/>
					<span>Mercados</span>
				</NavLink>

				<NavLink onClick={handleClose} to="/wallet" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon3)}/>
					<span>Carteiras</span>
				</NavLink>

				<NavLink onClick={handleClose} to="/orders" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon4)}/>
					<span>Ordens</span>
				</NavLink>

				<NavLink onClick={handleClose} to="/extract" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon5)}/>
					<span>Extrato</span>
				</NavLink>

				<NavLink onClick={handleClose} to="/deposit" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon6)}/>
					<span>Depósitos</span>
				</NavLink>

				<NavLink onClick={handleClose} to="/withdraw" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon7)}/>
					<span>Saques</span>
				</NavLink>

				<NavLink onClick={handleClose} to="/help" activeClassName={style.itemMenuActive} className={cx(style.itemMenu, collapse ?  style.itemMenuOpen : null)}>
					<div className={cx(style.iconMenu, style.icon8)}/>
					<span>Suporte</span>
				</NavLink>

			</div>
			<div onClick={handleClose} className={cx(style.backLayer, collapse ? style.backLayerOpen : null)}/>
		</>
	);
}

export default Sidebar;