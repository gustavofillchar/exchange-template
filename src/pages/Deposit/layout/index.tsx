import React from 'react';
import DepositExtract from '../../../components/DepositExtract';
import MakeDeposit from '../../../components/MakeDeposit';

import style from './deposit.module.scss'

type LayoutDepositProps = {}

const Layout: React.FC<LayoutDepositProps> = ({}:LayoutDepositProps) => {
  return (
    <div className="container-fluid">

      <div className="row">

        <div className="col-lg-4">
          <div className={style.tableContainer}>
            <div className={style.tableItem}>
              <MakeDeposit/>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className={style.tableContainer}>
            <div className={style.tableItem}>
              <DepositExtract/>
            </div>
          </div>
        </div>     

      </div>

    </div>      
  );
}

export default Layout;