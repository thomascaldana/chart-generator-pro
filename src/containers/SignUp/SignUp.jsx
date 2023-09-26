import { useState } from "react";
// import { useStytch } from "@stytch/react";
import { Container } from './Styles.js'
import { useStytch } from '@stytch/react'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stytchClient = useStytch()

  const signUp = () => {
    stytchClient.passwords.strengthCheck({ email, password })
      .then((res) => {
        console.log("Success", res);
      })
      .catch((err) => console.log("Error: ", err));

    stytchClient.passwords.create({
      email,
      password,
      session_duration_minutes: 60
    })
  }



  return (
    <Container>
      <h1>SIGN UP</h1>

      <input
        placeholder="Email..."
        onChange={e => setEmail(e.target.value)}

      />
      <input
        placeholder="Password..."
        onChange={e => setPassword(e.target.value)}

      />

      <button onClick={signUp} > Sign Up</button>
    </Container>
  );
};

export default SignUp