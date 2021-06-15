import React from 'react';
import style from './market.module.scss'
import cx from "classnames"

type LayoutPropsMarket = {
  
}

const Layout: React.FC<LayoutPropsMarket> = ({}:LayoutPropsMarket) => {
  return (
    <div>
      <div className="container-fluid">

        <div className="row">

          <div className="col-md-12">

            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                mercado (grafico)
              </div>
            </div>

          </div>

        </div>

        <div className="row">

          <div className="col-md-3">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                negociação
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                ordens de compra
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                ordens de venda
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                minhas ordens
              </div>
            </div>
          </div>

        </div>        

      </div>
      
      
    </div>

      
  );
}

export default Layout;