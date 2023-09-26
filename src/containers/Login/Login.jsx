// import { useState, useCallback } from "react";
// import { useStytch } from "@stytch/react";
import { Container } from './Styles.js'
import { Link } from 'react-router-dom'


const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const stytchClient = useStytch();

  // const resetPasswordByEmail = useCallback(() => {
  //   stytchClient.passwords.resetByEmailStart({
  //     email: "pedro@pedrotech.co",
  //   });
  // }, [stytchClient]);

  // const login = () => {
  //   stytchClient.passwords.authenticate({
  //     email,
  //     password,
  //     session_duration_minutes: 60,
  //   });
  // };

  return (
    <Container>
      <h1>LOGIN</h1>

      <input
        placeholder="Email..."

      />
      <input
        placeholder="Password..."

      />

      <button> Login</button>

      <div>
        <p> Forgot your password? </p>
        <button> <Link id='sign-up' to="/resetpassword" className='link-routes'>Reset password</Link></button>

      </div>
      {/* <Footer /> */}

    </Container>
  );
};

export default Login