import React from 'react';
import ExtractTable from '../../../components/ExtractTable';
import style from './extract.module.scss'

type LayoutPropsExtract = {
  
}

const Layout: React.FC<LayoutPropsExtract> = ({}:LayoutPropsExtract) => {
  return (
    <div>
      <div className="container-fluid">

        <div className="row no-gutters">

          <div className="col-lg-12">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <ExtractTable/>
              </div>
            </div>
          </div>

        </div>
      
      </div>
      
      
    </div>

      
  );
}

export default Layout;