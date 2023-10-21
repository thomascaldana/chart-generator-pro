import { useState } from "react";
import { Container, Input, FirstTitle, SubmitInput, Message } from './Styles.js'
import { useStytch } from "@stytch/react";
import { ToastContainer, toast } from 'react-toastify';



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

      logout();
      showLoadingToast();

      const response = await stytchClient.passwords.resetByEmail({
        token,
        password: newPassword,
        session_duration_minutes: 60,
      });

      if (response.status === 'failure') {
        hideLoadingToast();
        notifyError('Try a harder password'); // Show an error message based on the response
        setMessage(response.error_message || "Try a harder password");
      } else {
        // Password changed successfully
        setMessage("Password changed successfully!");
        hideLoadingToast();
        notifySuccess('Success! New password created! Welcome!');
      }
    } catch (error) {
      hideLoadingToast();
      notifyError('Try a harder password');
      setMessage(error.error_message || "Try a harder password");
    }


  }


  const showLoadingToast = () => toast.info('Checking your email & password...', {
    position: "top-center",
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    theme: "colored",
  });

  const hideLoadingToast = () => toast.dismiss();

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



  const notifyError = (message) => toast.error(message, {
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
      <ToastContainer />
    </Container>
  );
};

export default ResetPassword