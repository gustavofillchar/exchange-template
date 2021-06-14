import React, {useState} from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary';
import InputPrimary from '../../../components/InputPrimary';
import InputPrimaryDisabled from '../../../components/InputPrimaryDisabled';
import StepIndicator from '../../../components/StepIndicator';
import cx from "classnames"
import Logo from '../../../components/Logo';
import style from './login.module.scss'

type LayoutPropsRegister = {
  goToSignIn(): void
}

const Layout: React.FC<LayoutPropsRegister> = ({goToSignIn} : LayoutPropsRegister) => {
  const [step, setStep] = useState(1)
  const [ischeck, setIsCheck] = useState(false)

  const handleCheckTerms = () => {
    setIsCheck(!ischeck)
  }

  const handleRegister = () => {
    if(ischeck){
      setStep(step + 1)

      //function register

    }else{
      alert("Você deve aceitar os termos de uso.")
    }
  }

  const Step1 = () => {
    return (
      <div className={style.formBox}>         
          <h4 className={style.headStatus}>
            <b>Etapa 1: </b>Seus dados de acesso
          </h4>        
          <InputPrimary placeholder="Digite seu e-mail" labelValue="E-mail"/>
          <InputPrimary placeholder="Senha" labelValue="Senha"/>
          <InputPrimary placeholder="Repita sua senha" labelValue="Repita sua senha"/>
          <ButtonPrimary onPress={() => setStep(step + 1)} transparency={false}>Registrar</ButtonPrimary>
          <ButtonPrimary onPress={goToSignIn} transparency>Já possui uma conta? Entre!</ButtonPrimary>
      </div>
    );
  }

  const Step2 = () => {
    return (
      <div className={style.formBox}>
          <h4 className={style.headStatus}>
            <b>Etapa 2: </b>Confirme seu e-mail
          </h4>
          <InputPrimaryDisabled value="gustavo@gmail.com" placeholder="Digite seu e-mail" labelValue="E-mail"/>
          <h6>Enviamos um código para seu e-mail</h6>
          <InputPrimary placeholder="Insira o código" labelValue="Código de validação"/>          
          <ButtonPrimary onPress={() => setStep(step + 1)} transparency={false}>Registrar</ButtonPrimary>
          <ButtonPrimary onPress={goToSignIn} transparency>Já possui uma conta? Entre!</ButtonPrimary>
      </div>
    );
  }

  const Step3 = () => {
    return (
      <div className={style.formBox}>

          <h4 className={style.headStatus}>
            <b>Etapa 3: </b>Dados pessoais para o cadastro
          </h4>

          <InputPrimary placeholder="Selecione seu país" labelValue="País"/>
          <InputPrimary placeholder="Digite seu nome completo" labelValue="Nome completo"/>
          <InputPrimary placeholder="Digite seu CPF" labelValue="CPF"/>
          <InputPrimary placeholder="Digite data de nascimento" labelValue="Data de nascimento"/>
          <ButtonPrimary onPress={() => setStep(step + 1)} transparency={false}>Registrar</ButtonPrimary>
          <ButtonPrimary onPress={goToSignIn} transparency>Já possui uma conta? Entre!</ButtonPrimary>
      </div>
    );
  }

  const Step4 = () => {
    return (
      <div className={style.formBox}>
          <h4 className={style.headStatus}>
            <b>Etapa 4: </b>Confira seus dados cadastrais
          </h4>
          <InputPrimary placeholder="Selecione seu país" labelValue="País"/>
          <InputPrimary placeholder="Digite seu nome completo" labelValue="Nome completo"/>
          <InputPrimary placeholder="Digite seu CPF" labelValue="CPF"/>
          <InputPrimary placeholder="Digite data de nascimento" labelValue="Data de nascimento"/>        
          <div className={style.formCheck}>
            <div onClick={handleCheckTerms} className={cx(style.boxCheck, ischeck ? style.trueCheck : null)}/>
            <p>Li e aceito os <a>termos de uso!</a></p>
          </div>
          <ButtonPrimary onPress={handleRegister} transparency={false}>Registrar</ButtonPrimary>
          <ButtonPrimary onPress={goToSignIn} transparency>Já possui uma conta? Entre!</ButtonPrimary>
      </div>
    );
  }

  const Step5 = () => {
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
  }

  
  return (
      <div className={style.container}>
          <div className={style.boxContainer}>
              <div className={style.actionBox}>

                <Logo/>

                <StepIndicator maxSteps={5} step={step}/>

                {(() => {
                  switch (step) {
                    case 1:
                      return <Step1 />;
                    case 2:
                      return <Step2/>;
                    case 3:
                      return <Step3 />;
                    case 4:
                      return <Step4 />;                      
                    case 5:
                      return <Step5 />;                      
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