import React from 'react';
import Layout from './layout'
import {useHistory} from "react-router-dom"

const Login: React.FC = () => {
  let history = useHistory();
  
  const goToSignUp = () => {
    history.push("/signup");
  }

  return <Layout
    goToSignUp={goToSignUp}
  />
}

export default Login;