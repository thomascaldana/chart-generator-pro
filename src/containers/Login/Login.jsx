import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ContainerForm, Input, SubmitInput, ContainerFirstInputs, FirtTitle, ContainerItems } from './styles';
import { useStytch } from "@stytch/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, trigger, formState: { errors } } = useForm({ mode: 'onChange' });
  const stytchClient = useStytch();

  const resetPasswordByEmail = () => {
    alert('Check your e-mail address');

    try {
      stytchClient.passwords.resetByEmail({
        email: email, // Assuming you have an email state variable
      });
      notifyResetPassword(`If your e-mail is registered, we sent a recovery e-mail to change the password to "${email}"`);
    } catch (error) {
      notifyError('Error');
    }
  };

  const onSubmit = async ({ email, dataUnit }) => {
    try {
      showLoadingToast();

      await stytchClient.passwords.authenticate({
        email: email,
        password: dataUnit,
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
      <FirtTitle>LOG IN</FirtTitle>
      <ContainerItems>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <ContainerFirstInputs>
            <div className="input-pair">
              <label htmlFor="email" className="labels">E-mail</label>
              <Input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address"
                  }
                })}
                placeholder="E-mail"
                required
                className={`input-no-margin ${errors.email ? 'input-error' : ''}`}
                onBlur={() => trigger("email")}
              />
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>
            <div className="input-pair">
              <label htmlFor="dataUnit" className="labels">Password</label>
              <Input
                type="password"
                {...register("dataUnit", { required: "Password is required" })}
                placeholder="Password"
                required
                className={`input-no-margin ${errors.dataUnit ? 'input-error' : ''}`}
                onBlur={() => trigger("dataUnit")}
              />
              {errors.dataUnit && <span className="error-message">{errors.dataUnit.message}</span>}
            </div>
          </ContainerFirstInputs>
          <SubmitInput
            type="submit"
            value="Log in"
          />
        </form>
        <div>
          <p> Forgot your password? </p>
          <button onClick={resetPasswordByEmail}> Reset password</button>
          <ToastContainer />
        </div>
      </ContainerItems>
    </ContainerForm>
  );
};

export default Login;