import React from 'react';
import cx from "classnames"
import style from './circleStatusIndicator.module.scss'

type CircleIndicatorProps = {
    indicator:boolean
}

const CircleStatusIndicator: React.FC<CircleIndicatorProps> = ({indicator}: CircleIndicatorProps) => {
  return (
      <div className={cx(style.container, indicator ? style.positive : style.negative)}></div>
  );
}

export default CircleStatusIndicator;