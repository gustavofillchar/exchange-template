import React from 'react';
import { format } from 'date-fns'
import style from "./datewithhour.module.scss"

type DateWithHourProps = {
    dateValue: any
}

const DateWithHour: React.FC<DateWithHourProps> = ({dateValue}:DateWithHourProps) => {
  return (
      <div className={style.container}>
          <h3>
            {format(new Date(dateValue), 'MM/dd/yyyy')}
          </h3>
          <span>
            {format(new Date(dateValue), 'kk:mm')}
          </span>
      </div>
  );
}

export default DateWithHour;