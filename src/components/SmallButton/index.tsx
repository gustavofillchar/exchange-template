import React from 'react';
import classNames from 'classnames/bind';
import style from './smallbutton.module.scss';

type ButtonProps = {
  children: string,
  onPress(): void,
  green?: boolean,
  blue?: boolean,
  red?: boolean
}

const SmallButton: React.FC<ButtonProps> = ({children, onPress, green = false, blue = false, red = false} : ButtonProps) => {
  
  let cx = classNames.bind(style);
  
  const btnSelected = () => {
    return style.blue;
  }

  let className = cx({
    btn: true,
    green: green,
    blue: blue,
    red: red,
  });

  return <button onClick={onPress} className={className}>{children}</button>
}

export default SmallButton;
