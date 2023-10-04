import styled from 'styled-components'
import { FiDownload } from 'react-icons/fi'


export const ContainerForm = styled.div`
  margin-top: 6rem;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .form-container{
    padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  }

  @media screen and (max-width: 500px){
    margin-top: 5rem;
  }

`
export const ContainerItems = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

`

export const Input = styled.input`
  padding: 3px 8px 3px 3px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  box-sizing: border-box;
  width: 18rem;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin: 10px 0;
  font-size: 14px;
`
export const SubmitInput = styled.input`
  position: relative;
  background-color: #007bff;
  color: white;
  border: none;
  font-weight: 600;
  margin-top: 2rem;
  padding: 10px 20px 10px;
  font-size: 24px;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  max-width: 20rem;
  font-weight: 400;
  transition: 0.3s all;
  cursor: pointer;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2); 


  &:hover {
    background-color: #0056b3;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 2px dashed lightgray;
  padding: auto 20px;
  margin: 0 auto;
`
export const ChartImg = styled.img`
  width: 80vw;
  max-width: 700px;
`

export const FiDownloadStyled = styled(FiDownload)`
width: 1.2rem;
height: 1.2rem;
color: black;
`

export const AddButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  margin-top: 20px;
  padding: 5px;
  font-size: 16px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  max-width: 10.9rem;
  font-weight: 400;
  transition: 0.3s all;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: darkgreen;
  }
`
export const DeleteButton = styled.button`
background-color: red;
  color: white;
  border: none;
  margin-top: 20px;
  padding: 5px;
  font-size: 16px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  max-width: 10.9rem;
  font-weight: 400;
  transition: 0.3s all;
  cursor: pointer;
  text-align: center;


  &:hover {
    background-color: darkred;
  }
`
export const DownloadButton = styled.button`
  background-color: lightgray;
  color: black;
  border: none;
  margin: 20px 0;
  padding: 5px;
  font-size: 16px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  max-width: 10.9rem;
  font-weight: 400;
  transition: 0.3s all;
  cursor: pointer;
  text-align: center;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: .6rem;



  &:hover {
    background-color: #f1f1f1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
  }
`

export const InfoInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  input:focus + span,
  input:valid + span {
    color: #000;
    transform: translateX(10px) translateY(3px);
    font-size: 0.75rem;
    padding: 0 10px;
    background-color: #f1f1f1;
      }

  .input-box{
    position: relative ;

    span{
    position: absolute;
    left: 0;
    padding: 1.3rem 1rem;
    pointer-events: none;
    color: #808080;
    font-size: 0.9rem;
    font-weight: 400;
    border-radius: 4px;
    transition: 0.4s
  }
}
`


export const SelectItemStyles = styled.div`
  display: flex;
  gap: 10px;
  flex-flow: row nowrap;
  align-items: center;
`
export const ContainerFirstInputs = styled.div`
  margin-top: 2rem; 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem;

  .input-pair{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 1rem 0;

    .input-no-margin{
      margin: 0;
    }


    .error-message{
      color: red;
    }
  }



  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 5rem;
  }
`

export const FirstTitle = styled.h1`
  font-size: 1.6rem;
  font-family: 'Preahvihear',sans-serif;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }

`

export const SecondTitle = styled.h1`
font-size: 1.4rem;
color: gray;
margin-bottom: 2rem;
font-family: 'Preahvihear',sans-serif;
text-align: center;

@media screen and (max-width: 500px) {
    font-size: 1.05rem;
    margin-bottom: 1.5rem;
  }
`

export const ForgotPasswordContainer = styled.div`
  margin-top: 0.7rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.7rem;

`
export const ForgotPasswordButton = styled.button`
  font-size: 1rem;
  text-align: center;
  background-color: #7bff ;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  


  &:hover {
    background-color:  #007bff;
    cursor: pointer;
  }


`
export const SignUpLink = styled.p`
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: #000;
align-self: center;
margin-top: 2rem; 


a {
  cursor: pointer;
  text-decoration: underline;
  color: #000;

}
`