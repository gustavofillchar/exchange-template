import React, { useState } from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary';
import InputPrimary from '../../../components/InputPrimary';
import InputPrimaryDisabled from '../../../components/InputPrimaryDisabled';
import StepIndicator from '../../../components/StepIndicator';
import cx from "classnames"
import Logo from '../../../components/Logo';
import style from './login.module.scss'
import ReactFlagsSelect from 'react-flags-select';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

type LayoutPropsRegister = {
  goToSignIn(): void,
  email: string,
  password: string,
  code: string,
  country: string,
  fullname: string,
  birthdate: string,
  cpf: string,
  setEmail: Function,
  setPassword: Function,
  setCode: Function,
  setCountry: Function,
  setCpf: Function,
  setFullname: Function,
  setBirthdate: Function,
}

const Layout: React.FC<LayoutPropsRegister> = ({
  goToSignIn,
  email,
  setEmail,
  password,
  setPassword,
  code,
  setCode,
  country,
  setCountry,
  cpf,
  setCpf,
  fullname,
  setFullname,
  birthdate,
  setBirthdate,
}: LayoutPropsRegister) => {

  const [step, setStep] = useState(1)
  const [ischeck, setIsCheck] = useState(false)

  const handleCheckTerms = () => {
    setIsCheck(!ischeck)
  }

  const handleRegister = () => {
    if (ischeck) {
      setStep(step + 1)
      //function register
    } else {

      toast.warn("Você deve aceitar os termos de uso.")

    }
  }

  const Step1: React.FC<any> = ({ }: any) => {

    return (
      <div className={style.formBox}>
        <h4 className={style.headStatus}>
          <b>Etapa 1: </b>Seus dados de acesso
        </h4>
        <InputPrimary standard value={email} onChangeText={setEmail} placeholder="Digite seu e-mail" labelValue="E-mail" />
        <InputPrimary isPasswordType value={password} onChangeText={setPassword} placeholder="Senha" labelValue="Senha" />
        <InputPrimary isPasswordType value={password} onChangeText={setPassword} placeholder="Repita sua senha" labelValue="Repita sua senha" />
        <ButtonPrimary onPress={() => setStep(step + 1)} transparency={false}>Registrar</ButtonPrimary>
        <ButtonPrimary onPress={goToSignIn} transparency>Já possui uma conta? Entre!</ButtonPrimary>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.boxContainer}>
        <div className={style.actionBox}>

          <Logo />

          <StepIndicator maxSteps={5} step={step} />

          {(() => {
            switch (step) {
              case 1:
                return (
                  <div className={style.formBox}>
                    <h4 className={style.headStatus}>
                      <b>Etapa 1: </b>Seus dados de acesso
                    </h4>
                    <InputPrimary standard value={email} onChangeText={setEmail} placeholder="Digite seu e-mail" labelValue="E-mail" />
                    <InputPrimary isPasswordType value={password} onChangeText={setPassword} placeholder="Senha" labelValue="Senha" />
                    <InputPrimary isPasswordType value={password} onChangeText={setPassword} placeholder="Repita sua senha" labelValue="Repita sua senha" />
                    <ButtonPrimary onPress={() => setStep(step + 1)} transparency={false}>Registrar</ButtonPrimary>
                    <ButtonPrimary onPress={goToSignIn} transparency>Já possui uma conta? Entre!</ButtonPrimary>
                  </div>
                );
              case 2:
                return (
                  <div className={style.formBox}>
                    <h4 className={style.headStatus}>
                      <b>Etapa 2: </b>Confirme seu e-mail
                    </h4>
                    <InputPrimaryDisabled value={email} placeholder="" labelValue="E-mail" />
                    <h6>Enviamos um código para seu e-mail</h6>
                    <InputPrimary standard value={code} onChangeText={setCode} placeholder="Insira o código" labelValue="Código de validação" />
                    <ButtonPrimary onPress={() => setStep(step + 1)} transparency={false}>Registrar</ButtonPrimary>
                    <ButtonPrimary onPress={goToSignIn} transparency>Já possui uma conta? Entre!</ButtonPrimary>
                  </div>
                );
              case 3:
                return (
                  <div className={style.formBox}>

                    <h4 className={style.headStatus}>
                      <b>Etapa 3: </b>Dados pessoais para o cadastro
                    </h4>

                    <ReactFlagsSelect
                      selected={country}
                      onSelect={code => setCountry(code)}
                      className={style.inputSelectCustom}
                      searchable
                      placeholder="Selecione o seu país"
                      searchPlaceholder="Pesquise pelo nome do país"
                      customLabels={{ "BR": "Brasil" }}
                    />

                    <InputPrimary standard value={fullname} onChangeText={setFullname} placeholder="Digite seu nome completo" labelValue="Nome completo" />
                    <InputPrimary cpf value={cpf} onChangeText={setCpf} placeholder="Digite seu CPF" labelValue="CPF" />
                    <InputPrimary datetype value={birthdate} onChangeText={setBirthdate} placeholder="Digite data de nascimento" labelValue="Data de nascimento" />
                    <ButtonPrimary onPress={() => setStep(step + 1)} transparency={false}>Registrar</ButtonPrimary>
                    <ButtonPrimary onPress={goToSignIn} transparency>Já possui uma conta? Entre!</ButtonPrimary>
                  </div>
                );
              case 4:
                return (
                  <div className={style.formBox}>
                    <ToastContainer/>
                    <h4 className={style.headStatus}>
                      <b>Etapa 4: </b>Confira seus dados cadastrais
                    </h4>
                    <ReactFlagsSelect
                      selected={country}
                      onSelect={code => setCountry(code)}
                      className={style.inputSelectCustom}
                      searchable
                      placeholder="Selecione o seu país"
                      searchPlaceholder="Pesquise pelo nome do país"
                      customLabels={{ "BR": "Brasil" }}
                    />
                    <InputPrimary standard value={fullname} onChangeText={setFullname} placeholder="Digite seu nome completo" labelValue="Nome completo" />
                    <InputPrimary cpf value={cpf} onChangeText={setCpf} placeholder="Digite seu CPF" labelValue="CPF" />
                    <InputPrimary datetype value={birthdate} onChangeText={setBirthdate} placeholder="Digite data de nascimento" labelValue="Data de nascimento" />
                    <div className={style.formCheck}>
                      <div onClick={handleCheckTerms} className={cx(style.boxCheck, ischeck ? style.trueCheck : null)} />
                      <p>Li e aceito os <a>termos de uso!</a></p>
                    </div>
                    <ButtonPrimary onPress={handleRegister} transparency={false}>Registrar</ButtonPrimary>
                    <ButtonPrimary onPress={goToSignIn} transparency>Já possui uma conta? Entre!</ButtonPrimary>
                  </div>
                );
              case 5:
                return (
                  <div className={style.formBox}>
                    <h4 className={style.headStatus}>
                      <b>Etapa 5: </b>Sua conta está ativada!
                    </h4>
                    <div className={style.completionScreen}>
                      <h4>Agora você faz parte da <b>BitChange</b>.</h4>
                      <p>Sua maneira de se relacionar com o seu dinheiro mudou! </p>
                    </div>
                    <ButtonPrimary onPress={goToSignIn} transparency={false}>Acessar</ButtonPrimary>
                  </div>
                );
              default:
                return <Step1 />;
            }
          })()}

        </div>
      </div>
    </div>
  );
}

export default Layout;