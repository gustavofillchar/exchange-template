import React from 'react';

import styles from './inputprimary.module.scss';

type InputProps = {
    labelValue: string,
    placeholder: string,
    value: string
}

const InputPrimaryDisabled: React.FC<InputProps> = ({labelValue, placeholder, value} : InputProps) => {
    return (
        <div className={styles.container}>
          <label>{labelValue}</label>
          <input value={value} disabled placeholder={placeholder}/>
        </div>
    )
}
  
export default InputPrimaryDisabled;