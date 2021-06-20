import React from 'react';
import MakeWithdraw from '../../../components/MakeWithdraw';
import WithdrawExtract from '../../../components/WithdrawExtract';

import style from './deposit.module.scss'

type LayoutWithDrawProps = {}

const Layout: React.FC<LayoutWithDrawProps> = ({}:LayoutWithDrawProps) => {
  return (
    <div className="container-fluid">

      <div className="row">

        <div className="col-lg-4">
          <div className={style.tableContainer}>
            <div className={style.tableItem}>
              <MakeWithdraw/>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className={style.tableContainer}>
            <div className={style.tableItem}>
              <WithdrawExtract/>
            </div>
          </div>
        </div>     

      </div>

    </div>      
  );
}

export default Layout;