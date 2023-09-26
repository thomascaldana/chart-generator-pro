import { useState } from "react";
import { useStytch } from "@stytch/react";
import { Container } from './Styles.js'




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stytchClient = useStytch();


  const resetPasswordByEmail = () => {
    console.log('show message function runned');
    stytchClient.passwords.resetByEmailStart({
      email: email,
    });
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
        <button onClick={resetPasswordByEmail}> Reset password</button>
        {/*   <Link id='sign-up' to="/resetpassword" className='link-routes'>Reset password Link</Link> */}

      </div>
      {/* <Footer /> */}

    </Container>
  );
};

export default Login