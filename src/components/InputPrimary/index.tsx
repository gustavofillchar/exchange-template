import React from 'react';

import styles from './inputprimary.module.scss';

type InputProps = {
    labelValue: string,
    placeholder: string
}

const InputPrimary: React.FC<InputProps> = ({labelValue, placeholder} : InputProps) => {
    return (
        <div className={styles.container}>
          <label>{labelValue}</label>
          <input placeholder={placeholder}/>
        </div>
    )
}
  
export default InputPrimary;