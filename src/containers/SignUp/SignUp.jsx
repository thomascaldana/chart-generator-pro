import { useState } from "react";
import { ContainerForm, FirstTitle, ContainerItems, Input, SubmitInput, Message, SignInLink } from './styles.js'
import { useStytch } from '@stytch/react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

import LogoutButton from "../../components/Logout/index.jsx";


const SignUp = () => {





  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
      notifySuccess("Account created successfully!")

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {

      setMessage(error.error_message || "An error occurred while signing up.");

      //console.error(JSON.stringify(error, null, 2));
    }
  };


  const notifySuccess = (message) => toast.success(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  return (
    <ContainerForm>
      <FirstTitle>SIGN UP</FirstTitle>
      <ContainerItems>
        <div className="input-pair">
          <label htmlFor="email" className="labels">E-mail</label>
          <Input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-pair">
          <label htmlFor="password" className="labels">Password</label>
          <Input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="message-box">
          {message && <Message>{message}</Message>}

        </div>

        <SubmitInput onClick={signUp} >Sign Up</SubmitInput>
      </ContainerItems>
      <SignInLink>Already have an account? <Link to='/auth'>Log In</Link> </SignInLink>
      <LogoutButton>Logout</LogoutButton>
      <ToastContainer />


    </ContainerForm >
  );
};

export default SignUp;
