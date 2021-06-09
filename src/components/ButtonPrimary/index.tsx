import React from 'react';

import style from './buttonprimary.module.scss';

type ButtonProps = {
  children: string
}

const ButtonPrimary: React.FC<ButtonProps> = ({children} : ButtonProps) => {
  return <button className={style.btn}>{children}</button>
}

export default ButtonPrimary;