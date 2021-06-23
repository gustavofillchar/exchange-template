import React from 'react';
import cx from 'classnames'
import style from './buttonprimary.module.scss';

type ButtonProps = {
  children: string,
  transparency?: boolean,
  onPress(): void
}

const ButtonPrimary: React.FC<ButtonProps> = ({children, transparency = false, onPress} : ButtonProps) => {
  return <button onClick={onPress} className={cx(transparency ? style.btnTransparency : style.btn)}>{children}</button>
}

export default ButtonPrimary;
