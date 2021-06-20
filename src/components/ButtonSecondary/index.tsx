import React from 'react';
import cx from 'classnames'
import style from './buttonsecondary.module.scss';

type ButtonProps = {
  children: string,
  secondaryBtn: boolean,
  onPress(): void
}

const ButtonSecondary: React.FC<ButtonProps> = ({children, secondaryBtn, onPress} : ButtonProps) => {
  return <button onClick={onPress} className={cx(secondaryBtn ? style.btnBlue : style.btn)}>{children}</button>
}

export default ButtonSecondary;
