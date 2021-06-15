import React from 'react';
import Layout from './layout'
import {useHistory} from "react-router-dom"

const SignUp: React.FC = () => {
  let history = useHistory();
  
  const goToSignIn = () => {
    history.push("/signin");
  }
  return <Layout goToSignIn={goToSignIn}/>
}

export default SignUp;