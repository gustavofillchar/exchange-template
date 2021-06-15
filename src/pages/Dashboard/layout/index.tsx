import React from 'react';
import style from './login.module.scss'

type LayoutPropsDashboard = {
  
}

const Layout: React.FC<LayoutPropsDashboard> = ({}:LayoutPropsDashboard) => {
  return (
      <div className={style.container}>
        Dashboard
      </div>
  );
}

export default Layout;