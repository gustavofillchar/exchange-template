import React from 'react';
import style from './dashboard.module.scss'
import cx from "classnames"

import Balance from "../../../components/Balance"
import OscillationChart from "../../../components/OscillationChart"
import HistoryMovement from "../../../components/HistoryMovement"
import MyWallets from '../../../components/MyWallets';
import CoinsTable from '../../../components/CoinsTable';

type LayoutPropsDashboard = {
  
}

const Layout: React.FC<LayoutPropsDashboard> = ({}:LayoutPropsDashboard) => {
  return (
    <div>
      <div className="container-fluid">

        <div className="row">

          <div className="col-lg-3 col-sm-12">

            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <Balance/>
              </div>

              <div className={style.tableItem}>
                <OscillationChart/>
              </div>

            </div>

          </div>

          <div className="col-lg-9">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <HistoryMovement/>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-md-6">

            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <MyWallets/>
              </div>

            </div>

          </div>

          <div className="col-md-6">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <CoinsTable/>
              </div>
            </div>
          </div>

        </div>        

      </div>
      
      
    </div>

      
  );
}

export default Layout;