import React from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary';
import Logo from '../../../components/Logo';
import style from './login.module.scss'
const Layout: React.FC = () => {
  return (
      <div className={style.container}>
          <div className={style.boxContainer}>
              <div className={style.actionBox}>
                <Logo/>
                <div>
                    <ButtonPrimary>Continuar</ButtonPrimary>
                </div>
              </div>
          </div>
      </div>
  );
}

export default Layout;