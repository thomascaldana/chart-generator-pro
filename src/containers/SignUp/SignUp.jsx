import { useState } from "react";
import { ContainerForm, FirstTitle, ContainerItems, Input, SubmitInput, Message } from './Styles.js'
import { useStytch } from '@stytch/react'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State variable to store the message

  const stytchClient = useStytch();

  const logout = () => {
    stytchClient.session.revoke();
  }
  const signUp = async () => {
    try {
      logout()
      const strengthCheckResponse = await stytchClient.passwords.strengthCheck({ email, password });
      console.log("Strength Check Success", strengthCheckResponse);

      // Create user account
      const createResponse = await stytchClient.passwords.create({
        email,
        password,
        session_duration_minutes: 60
      });
      console.log("User Created", createResponse);

      setMessage("Account created successfully!");
    } catch (error) {

      setMessage(error.error_message || "An error occurred while signing up.");

      console.error(JSON.stringify(error, null, 2));
    }
  };

  return (
    <ContainerForm>
      <FirstTitle>SIGN UP</FirstTitle>
      <ContainerItems>
        <div className="input-pair">
          <label htmlFor="email" className="labels">E-mail</label>
          <Input
            placeholder="Email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-pair">
          <label htmlFor="password" className="labels">Password</label>
          <Input
            placeholder="Password..."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {message && <Message>{message}</Message>}

        <SubmitInput onClick={signUp} >Sign Up</SubmitInput>
      </ContainerItems>

    </ContainerForm >
  );
};

export default SignUp;
