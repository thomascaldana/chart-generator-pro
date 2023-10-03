import { useState } from "react";
import { Container } from './Styles.js'
import { useStytch } from '@stytch/react'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State variable to store the message

  const stytchClient = useStytch();

  const signUp = async () => {
    try {
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
      setMessage(error.message || "An error occurred while signing up.");
    }
  };

  return (
    <Container>
      <h1>SIGN UP</h1>

      <input
        placeholder="Email..."
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={signUp}>Sign Up</button>


      {message && <p>{message}</p>}
    </Container>
  );
};

export default SignUp;
