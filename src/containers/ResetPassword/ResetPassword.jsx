// import { useState, useCallback } from "react";
// import { useStytch } from "@stytch/react";
import { Container } from './Styles.js'


const ResetPassword = () => {
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
      <h1> RESET Password</h1>
      <input
        placeholder="New Password..."

      />

      <button> Reset Password</button>
    </Container>
  );
};

export default ResetPassword