// import { useState, useCallback } from "react";
// import { useStytch } from "@stytch/react";
import { Container } from './Styles.js'

const SignUp = () => {
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
      <h1>SIGN UP</h1>

      <input
        placeholder="Email..."


      />
      <input
        placeholder="Password..."

      />

      <button > Sign Up</button>
    </Container>
  );
};

export default SignUp