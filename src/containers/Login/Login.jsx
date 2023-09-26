import { useCallback, useState } from "react";
import { useStytch } from "@stytch/react";
import { Container } from './Styles.js'
import { Link } from 'react-router-dom'



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stytchClient = useStytch();

  const resetPasswordByEmail = () => {
    stytchClient.passwords.resetByEmailStart({
      email: "caldana3d@gmail.com"
    });
    console.log('ok')
  }


  const login = () => {
    stytchClient.passwords.authenticate({
      email,
      password,
      session_duration_minutes: 60,
    });
  };

  return (
    <Container>
      <h1>LOGIN</h1>

      <input
        placeholder="Email..."
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        onChange={e => setPassword(e.target.value)}

      />

      <button onClick={login}> Login</button>

      <div>
        <p> Forgot your password? </p>
        <button onClick={resetPasswordByEmail}> <Link id='sign-up' to="/resetpassword" className='link-routes'>Reset password</Link></button>

      </div>
      {/* <Footer /> */}

    </Container>
  );
};

export default Login