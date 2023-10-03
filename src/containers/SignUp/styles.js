import styled from 'styled-components'

export const ContainerForm = styled.div`
  margin-top: 6rem;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

`

export const FirstTitle = styled.h1`
  font-size: 1.6rem;
  font-family: 'Preahvihear',sans-serif;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }

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
  font-size: 14px;
`
export const SubmitInput = styled.button`
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

export const ContainerItems = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: left;
  align-items: flex-start;
  margin-top: 2.7rem;

  .input-pair{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 0.8rem 0;
  }
`
export const Message = styled.p`
  
  font-weight: 500;

`

