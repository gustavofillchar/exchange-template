import React from 'react';
import AccountBanks from './components/AccountBanks';
import DocumentIdentify from './components/DocumentIdentify';
import ListAccountBanks from './components/ListAccountBanks';
import PasswordAccess from './components/PasswordAccess';
import ProfileDetails from './components/ProfileDetails';
import SelfieBox from './components/SelfieBox';
import TwoFactorBox from './components/TwoFactorBox';
import style from './profile.module.scss'

type LayoutPropsProfile = {

}

const Layout: React.FC<LayoutPropsProfile> = ({ }: LayoutPropsProfile) => {
  return (
    <div>
      <div className="container-fluid">

        <div className="row no-gutters">

          <div className="col-lg-12">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <ProfileDetails/>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-lg-4">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <AccountBanks/>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <ListAccountBanks/>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <DocumentIdentify/>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <SelfieBox/>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <PasswordAccess/>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <TwoFactorBox/>
              </div>
            </div>
          </div>

        </div>

      </div>


    </div>


  );
}

export default Layout;