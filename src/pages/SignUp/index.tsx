import React, {useState} from 'react';
import Layout from './layout'
import {useHistory} from "react-router-dom"

const SignUp: React.FC = () => {
  let history = useHistory();
  
  const goToSignIn = () => {
    history.push("/signin");
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [code, setCode] = useState("")
  const [country, setCountry] = useState("")
  const [cpf, setCpf] = useState("")
  const [fullname, setFullname] = useState("")
  const [birthdate, setBirthdate] = useState("")

  return <Layout 
    email={email}
    password={password}
    code={code}
    country={country}
    cpf={cpf}
    fullname={fullname}
    birthdate={birthdate}
    setEmail={setEmail}
    setPassword={setPassword}
    setCode={setCode}
    setCountry={setCountry}
    setCpf={setCpf}
    setFullname={setFullname}
    setBirthdate={setBirthdate}
    goToSignIn={goToSignIn}
  />
}

export default SignUp;