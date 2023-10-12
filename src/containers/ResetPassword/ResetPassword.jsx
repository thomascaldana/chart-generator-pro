import { useState } from "react";
import { Container, Input, FirstTitle, SubmitInput, Message } from './Styles.js'
import { useStytch } from "@stytch/react";



const ResetPassword = () => {

  const [newPassword, setNewPassword] = useState();
  const [message, setMessage] = useState("");

  const stytchClient = useStytch()

  const logout = () => {
    stytchClient.session.revoke();
  }

  const token = new URLSearchParams(window.location.search).get("token");

  const resetPassword = async () => {

    try {

      logout()

      const strengthCheckResponse = await stytchClient.passwords.strengthCheck({ newPassword });
      console.log("Strength Check Success", strengthCheckResponse);

      stytchClient.passwords.resetByEmail({
        token,
        password: newPassword,
        session_duration_minutes: 60,
      })

      setMessage("Password changed successfully!");


    } catch (error) {
      setMessage(error.error_message || "Try a harder password");

    }


  }


  return (
    <Container>
      <FirstTitle> RESET PASSWORD</FirstTitle>
      <Input
        placeholder="New Password..."
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <div className="message-box">
        {message && <Message>{message}</Message>}

      </div>

      <SubmitInput onClick={resetPassword}> Reset Password</SubmitInput>
    </Container>
  );
};

export default ResetPassword