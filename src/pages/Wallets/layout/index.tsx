import React from 'react';
import style from './wallets.module.scss'
import IconCurrencyOnly from "../../../components/UtilsComponents/IconCurrencyOnly"
import QRCode from "react-qr-code";
import PriceFormat from '../../../components/UtilsComponents/PriceFormat';
import SmallButton from '../../../components/SmallButton';
import ExtractCoinSelected from './components/ExtractCoinSelected';
import CurrencyWithIcon from '../../../components/UtilsComponents/CurrencyWithIcon';

type LayoutPropsWallets = {}

const WalletItem: React.FC = () => {
  return (
    <div className={style.tableContainerWalletItem}>

      <div className={style.walletItem}>

        <div className={style.headerWallet}>
          <IconCurrencyOnly iconName="btc" iconType={false} />
          <h4>Bitcoin - BTC</h4>
        </div>

        <div className={style.walletContain}>
          <div className={style.qrcodeContent}>
            <QRCode value="hash-aqui-039502935023590239759293759237592073592307" size={130} />
          </div>

          <div className={style.currencyInfo}>

            <div className={style.itemList}>
              <span><b>Endereço:</b> 3Dg64MoiswqMB1VccfhWgFYgYprtF135oc</span>
            </div>

            <div className={style.itemList}>
              <span><b>Disponível:</b> BTC 0.09028202</span>
            </div>

            <div className={style.itemList}>
              <span><b>Valor estimado:</b> <PriceFormat value={2392} /></span>
            </div>

          </div>

        </div>

        <div className={style.groupBtns}>
          <SmallButton
            green={true}
            blue={false}
            red={false}
            onPress={() => alert("Comprar")}
          >
            Comprar
          </SmallButton>

          <SmallButton
            green={false}
            blue={false}
            red={true}
            onPress={() => alert("Vender")}
          >
            Vender
          </SmallButton>

          <SmallButton
            green={false}
            blue={true}
            red={false}
            onPress={() => alert("Transferir")}
          >
            Transferir
          </SmallButton>
        </div>

      </div>
    </div>
  )
}

const TableSelectCurrency: React.FC = () => {
  
  const [active, setActive] = React.useState(false)
  
  const RowsTableExample = [...Array(18)].map((_, i) => {
    return (
      <tr className={style.selectedItems} >
        <td>
          <CurrencyWithIcon hover={active} iconName="btc" currency="Bitcoin" />
        </td>
        <td>Depósito em conta</td>
        <td><PriceFormat value={23242} /></td>
        <td>25%</td>
        <td>0</td>
      </tr>
    )
  }
  );


  return (
    <div className={style.tableContainer}>
      <div className={style.tableItem}>
        <table>
          <tr>
            <th>Moeda</th>
            <th>Disponível</th>
            <th>Em reais</th>
            <th>Percentual</th>
            <th></th>
          </tr>

          {RowsTableExample}

        </table>
      </div>
    </div>
  )
}

const Layout: React.FC<LayoutPropsWallets> = ({ }: LayoutPropsWallets) => {

  return (
    <div>
      <div className="container-fluid">

        <div className="row">

          <div className="col-lg-6">
            <TableSelectCurrency />
          </div>

          <div className="col-lg-6">
            <WalletItem />
          </div>

        </div>

        <div className="row no-gutters">

          <div className="col-lg-12">
            <div className={style.tableContainer}>
              <div className={style.tableItem}>
                <ExtractCoinSelected />
              </div>
            </div>
          </div>


        </div>

      </div>


    </div>


  );
}

export default Layout;