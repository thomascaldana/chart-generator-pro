import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ContainerForm, Input, SubmitInput, ContainerFirstInputs, FirtTitle, ContainerItems } from './styles'

import { useStytch } from "@stytch/react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, control } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stytchClient = useStytch();


  const resetPasswordByEmail = () => {
    alert('Check your e-mail adress');
    stytchClient.passwords.resetByEmail({
      email: email,
    });
  }

  const login = async () => {
    try {
      // Authenticate the user
      await stytchClient.passwords.authenticate({
        email,
        password,
        session_duration_minutes: 60,
      });
      // Redirect to the "MyCharts" route
      notify()

      setTimeout(() => {
        navigate('/mycharts');
      }, 2000);


    } catch (error) {
      // Handle authentication error
      console.error('Authentication failed:', error);
      // You can show an error toast message here if needed
    }
  };

  const notify = () => toast.success('Welcome', {
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
              <Input type="password" {...register("dataUnit")} placeholder="Passoword" required className="input-no-margin"
                onChange={e => setPassword(e.target.value)} />
            </div>

          </ContainerFirstInputs>


          <SubmitInput type="submit" value="Log in" onClick={login} />
        </form>

        <div>
          <p> Forgot your password? </p>
          <button onClick={resetPasswordByEmail}> Reset password</button>
          <ToastContainer />

          {/*   <Link id='sign-up' to="/resetpassword" className='link-routes'>Reset password Link</Link> */}

        </div>
        {/* <Footer /> */}

      </ContainerItems>

    </ContainerForm>
  );
};

export default Login;
