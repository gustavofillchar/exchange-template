import React from 'react';
import BuyOrders from '../../../components/BuyOrders';
import CreateOrder from '../../../components/CreateOrder';
import MyOrders from '../../../components/MyOrders';
import SalesOrders from '../../../components/SalesOrders';

import style from './orders.module.scss'

type LayoutPropsOrders = {
  
}

const Layout: React.FC<LayoutPropsOrders> = ({}:LayoutPropsOrders) => {
  return (
    <div>
      <div className="container-fluid">

        <div className="row">

          <div className="col-lg-12">
          
          </div>

        </div>

        <div className="row">

          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-4">
                <div className={style.tableContainer}>
                  <div className={style.tableItem}>                    
                    <BuyOrders/>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className={style.tableContainer}>
                  <div className={style.tableItem}>
                    <SalesOrders/>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className={style.tableContainer}>
                  <div className={style.tableItem}>
                    <MyOrders/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <CreateOrder/>
              </div>
            </div>
          </div>
          
        </div>        

      </div>
      
      
    </div>

      
  );
}

export default Layout;