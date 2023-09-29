import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContainerForm, Input, SubmitInput, ContainerFirstInputs, FirtTitle, ContainerItems } from './styles'
import { useStytch } from "@stytch/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const stytchClient = useStytch();

  const resetPasswordByEmail = () => {
    alert('Check your e-mail address');

    try {
      stytchClient.passwords.resetByEmail({
        email: email,
      });
      notifyResetPassword(`If your e-mail is registered, we sent a recovery e-mail to change the password to "${email}"`)
    } catch (error) {
      notifyError('Error');
    }
  }

  const login = async () => {
    try {
      setIsLoading(true);
      showLoadingToast();


      await stytchClient.passwords.authenticate({
        email,
        password,
        session_duration_minutes: 60,
      });


      hideLoadingToast();
      notifySuccess('Welcome');

      setTimeout(() => {
        navigate('/mycharts');
      }, 2000);


    } catch (error) {
      setIsLoading(false);
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

  const notifyResetPassword = (message) => toast.warning(message, {
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
    autoClose: 2000, // Close error toast after 2 seconds
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
        <form onSubmit={handleSubmit((formData) => setData(formData))} className="form-container">
          <ContainerFirstInputs>
            <div className="input-pair">
              <label htmlFor="chartTitle" className="labels">E-mail</label>
              <Input type="email" {...register("chartTitle")} placeholder="E-mail" required className="input-no-margin"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="input-pair">
              <label htmlFor="dataUnit" className="labels">Password</label>
              <Input type="password" {...register("dataUnit")} placeholder="Password" required className="input-no-margin"
                onChange={e => setPassword(e.target.value)} />
            </div>
          </ContainerFirstInputs>
          <SubmitInput
            type="submit"
            value="Log in"
            onClick={login}
            disabled={isLoading}
            className={isLoading ? 'loading-button' : ''}
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
