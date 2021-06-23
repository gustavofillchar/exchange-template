import React, { useState } from 'react';
import { cpfMask } from './mask'
import styles from './inputprimary.module.scss';
import cx from "classnames"

type InputProps = {
    labelValue: string,
    placeholder: string
    value: string,
    onChangeText: Function,
    cpf?: boolean,
    standard?: boolean,
    isPasswordType?: boolean,
    datetype?: boolean
}

const InputPrimary: React.FC<InputProps> = ({
    labelValue,
    placeholder,
    value,
    onChangeText,
    isPasswordType = false,
    cpf = false,
    standard = false,
    datetype = false
}: InputProps) => {

    const [showPass, setShowPass] = useState(false)

    const handleEye = () => {
        setShowPass(!showPass)
    }

    return (
        <div className={styles.container}>
            <label>{labelValue}</label>
            
            {cpf && (<input value={value} onChange={e => onChangeText(cpfMask(e.target.value))} placeholder={placeholder} />)}
            
            {standard && (<input value={value} onChange={e => onChangeText(e.target.value)} placeholder={placeholder} />)}
            
            {datetype && (<input data-mask='dd/mm/yyyy' value={value} onChange={e => onChangeText(e.target.value)} placeholder={placeholder} />)}
            
            {isPasswordType && (
                <div className={styles.inputPassword} >
                    <input type={!showPass ? "password" : "text"} value={value} onChange={e => onChangeText(e.target.value)} placeholder={placeholder} />
                    <div onClick={handleEye} className={cx(showPass ? styles.eyeClose : styles.eyeOpen)} />
                </div>
            )}

        </div>
    )
}

export default InputPrimary;