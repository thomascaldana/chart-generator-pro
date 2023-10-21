import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContainerForm, Input, SubmitInput, ContainerFirstInputs, FirstTitle, ContainerItems, ForgotPasswordContainer, ForgotPasswordButton, SignUpLink } from './styles';
import { useStytch } from "@stytch/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';

import LogoutButton from "../../components/Logout/index.jsx";



const Login = () => {



  const navigate = useNavigate();
  const { register, handleSubmit, trigger, formState: { errors } } = useForm({ mode: 'onChange' });
  const stytchClient = useStytch();

  const [emailRecovery, setEmailRecovery] = useState()

  function isValidEmail (email) {
    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const resetPassword = () => {

    // Check if the emailRecovery is a valid email address
    if (!isValidEmail(emailRecovery)) {
      notifyError('Type your e-mail before clicking in the Reset Password button');
      return; // Stop further execution
    }
    try {
      stytchClient.passwords.resetByEmailStart({
        email: emailRecovery,
      });

      notifyResetPassword(`We sent and e-mail to recovery your password to ${emailRecovery}`)
    } catch (error) {
      notifyError('Something was wrong with reset password');
    }
  }

  const onSubmit = async ({ password }) => {
    try {
      showLoadingToast();

      await stytchClient.passwords.authenticate({
        email: emailRecovery,
        password: password,
        session_duration_minutes: 60,
      });

      hideLoadingToast();
      notifySuccess('Welcome');

      setTimeout(() => {
        navigate('/mycharts');
      }, 2000);
    } catch (error) {
      hideLoadingToast();

      notifyError('Invalid email or password. Please try again.');
      console.error('Authentication failed:', error);
    }
  };

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

  const notifyResetPassword = (message) => toast.success(message, {
    position: "top-center",
    autoClose: 6000,
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
    <ContainerForm>
      <FirstTitle>LOG IN</FirstTitle>
      <ContainerItems>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <ContainerFirstInputs>
            <div className="input-pair">
              <label htmlFor="email" className="labels">E-mail</label>
              <Input
                type="email"
                {...register("emailInput", {

                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address"
                  }
                })}
                placeholder="Email..."
                required
                className={`input-no-margin ${errors.emailInput ? 'input-error' : ''}`}
                onBlur={() => trigger("emailInput")}
                onChange={(event) => {
                  setEmailRecovery(event.target.value);
                }}
              />
              {errors.emailInput && <span className="error-message">{errors.emailInput.message}</span>}
            </div>
            <div className="input-pair">
              <label htmlFor="password" className="labels">Password</label>
              <Input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Password..."
                required
                className={`input-no-margin ${errors.password ? 'input-error' : ''}`}
                onBlur={() => trigger("password")}
              />
              {errors.password && <span className="error-message">{errors.password.message}</span>}
            </div>
          </ContainerFirstInputs>
          <SubmitInput
            type="submit"
            value="Log in"
          />
        </form>
        <ForgotPasswordContainer>
          <p> Forgot your password? </p>
          <ForgotPasswordButton onClick={resetPassword}> Reset password</ForgotPasswordButton>
          <ToastContainer />
        </ForgotPasswordContainer>
        <SignUpLink>New here? <Link to='/signup'>Sign Up</Link> </SignUpLink>
        <LogoutButton>Logout</LogoutButton>
      </ContainerItems>
    </ContainerForm>
  );
};

export default Login;