import React, { useState } from 'react';
import cx from 'classnames';
import style from "./FilterPeriodDate.module.scss"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { Locale, format } from "date-fns";
import ptLocale from 'date-fns/locale/pt'

type SelectorProps = {
  
}

const FilterPeriodDate: React.FC = () => {
  const [isCollapse, setIsCollapse] = useState(false)
  const [customPeriod, setCustomPeriod] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleMenu = () => {
    setIsCollapse(!isCollapse)
  }

  const handleCustomPeriod = () => {
    setCustomPeriod(!customPeriod)
  }

  const handleWeek = () => {
    setCustomPeriod(!customPeriod)
  }

  const handleMonth = () => {
    setCustomPeriod(!customPeriod)
  }

  const handleAllPeriod = () => {
    setCustomPeriod(!customPeriod)
  }

  return (
    <div className={style.container}>
      <div onClick={handleMenu} className={style.buttonSelector}>
        <span>{format(new Date(), "yyyy-MM-dd")} - {format(new Date(), "yyyy-MM-dd")}</span>
        <div className={style.icon} />
      </div>

      <div className={cx(style.modalSelector, isCollapse ? style.modalSelectorCollapsed : null)}>
        <a onClick={handleWeek}>Esta semana</a>
        <a onClick={handleMonth}>Últimos 30 dias</a>
        <a onClick={handleAllPeriod}>Todo o período</a>
        <a onClick={handleCustomPeriod}>Personalizado</a>

        <DateRange
          editableDateInputs={true}
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          locale={ptLocale}
          className={cx(style.customPeriodCalendar, customPeriod && style.calendarHiddenCustom)}
        />

      </div>


    </div>
  );
}

export default FilterPeriodDate;