import React, {useState} from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary';
import InputPrimary from '../../../components/InputPrimary';
import Logo from '../../../components/Logo';
import style from './login.module.scss'

type LayoutPropsSignUp = {
  goToSignUp(): void,
  user:string,
  password:string,
  setUser: Function,
  setPassword:Function
}

const Layout: React.FC<LayoutPropsSignUp> = ({goToSignUp, user, password, setUser, setPassword}:LayoutPropsSignUp) => {
  return (
      <div className={style.container}>
          <div className={style.boxContainer}>
              <div className={style.actionBox}>

                <Logo/>

                <div className={style.formBox}>
                    <InputPrimary standard value={user} onChangeText={setUser} placeholder="Digite seu e-mail" labelValue="Usuário"/>
                    <InputPrimary isPasswordType value={password} onChangeText={setPassword} placeholder="Senha" labelValue="Senha"/>
                    <a>Esqueci minha senha</a>
                    <ButtonPrimary onPress={() => alert("Login")} transparency={false}>Continuar</ButtonPrimary>
                    <ButtonPrimary onPress={goToSignUp} transparency>Criar conta</ButtonPrimary>
                </div>

              </div>
          </div>
      </div>
  );
}

export default Layout;