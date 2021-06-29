import React from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary';
import DateWithHour from '../../../components/UtilsComponents/DateWithHour';

import style from './help.module.scss'

type LayoutHelpProps = {}

const FormTicket: React.FC = () => {
  return (
    <>
      <div className={style.header}>
        <h3>Abrir um ticket</h3>
      </div>

      <div className={style.formTicket}>

        <div className={style.formGroup}>
          <label htmlFor="options">Departamento</label>
          <select id="options" name="selectOptions">
            <option value="financeiro">Financeiro</option>
            <option value="tecnico">Técnico</option>
            <option value="reclamacoes">Reclamações</option>
            <option value="duvidas">Dúvidas</option>
          </select>
        </div>

        <div className={style.formGroup}>
          <label htmlFor="subject">Assunto</label>
          <input type="text" placeholder="Assunto" id="subject" />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="fileAdd">Anexo</label>
          <div className={style.boxFileUpload}>
            <div className={style.iconUpload} />
            <input className={style.typeFile} type="file" id="fileAdd" accept="image/png, image/jpeg"/>
          </div>
        </div>

        <div className={style.formGroup}>
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" />
        </div>

        <ButtonPrimary transparency={false} onPress={() => alert("Enviar")}>Enviar</ButtonPrimary>

      </div>
    </>
  )
}

const ListTickets: React.FC = () => {

  const [active, setActive] = React.useState(false)

  const RowsTableExample = [...Array(3)].map((_, i) => {
    var testDate = Date.now();

    return (
      <tr className={style.selectedItems} >
        <td>
          <DateWithHour dateValue={testDate} />
        </td>
        <td>Financeiro</td>
        <td>Problemas no banco</td>
        <td>-</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto consequuntur...</td>
        <td>Em revisão</td>
        <td>-</td>
      </tr>
    )
  }
  );

  return (
    <table>
      <tr>
        <th>Data</th>
        <th>Departamento</th>
        <th>Assunto</th>
        <th>Anexo</th>
        <th>Mensagem</th>
        <th>Status</th>
        <th>Ação</th>
      </tr>

      {RowsTableExample}

    </table>
  )
}


const Layout: React.FC<LayoutHelpProps> = ({ }: LayoutHelpProps) => {
  return (
    <div className="container-fluid">

      <div className="row">

        <div className="col-lg-4">
          <div className={style.tableContainer}>
            <div className={style.tableItem}>
              <FormTicket />
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className={style.tableContainer}>
            <div className={style.tableItem}>
              <ListTickets />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Layout;