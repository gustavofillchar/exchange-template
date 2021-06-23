import React, {useState} from 'react';
import Layout from './layout'
import {useHistory} from "react-router-dom"

const Login: React.FC = () => {
  let history = useHistory();
  
  const goToSignUp = () => {
    history.push("/signup");
  }

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return <Layout
    user={username}
    setUser={setUsername}
    setPassword={setPassword}
    password={password}
    goToSignUp={goToSignUp}
  />
}

export default Login;