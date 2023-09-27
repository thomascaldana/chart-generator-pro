import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ContainerForm, Input, SubmitInput, ContainerFirstInputs, FirtTitle, ContainerItems } from './styles'


const ChartInfo = () => {
  const { register, handleSubmit, control } = useForm();


  return (
    <ContainerForm>
      <FirtTitle>LOG IN</FirtTitle>
      <ContainerItems>
        <form onSubmit={handleSubmit((formData) => setData(formData))} className="form-container">

          <ContainerFirstInputs>

            <div className="input-pair">
              <label htmlFor="chartTitle" className="labels">E-mail</label>
              <Input type="email" {...register("chartTitle")} placeholder="Chart Title" required className="input-no-margin" />
            </div>

            <div className="input-pair">
              <label htmlFor="dataUnit" className="labels">Password</label>
              <Input type="password" {...register("dataUnit")} placeholder="Data Unit" required className="input-no-margin" />
            </div>

          </ContainerFirstInputs>


          <SubmitInput type="submit" value="Log in" />
        </form>


      </ContainerItems>

    </ContainerForm>
  );
};

export default ChartInfo;
