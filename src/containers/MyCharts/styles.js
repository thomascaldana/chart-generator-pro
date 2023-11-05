import styled from 'styled-components';
import { FiDownload, FiTrash2 } from 'react-icons/fi';

export const FirstTitle = styled.h1`
  font-family: 'Preahvihear', sans-serif;
  text-align: center;
  font-size: 1.6rem;
  margin-top: 7rem;
`;

export const GlobalContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Container = styled.div`
  margin: 7rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 450px) {
    gap: 2rem;
  }

  .my-chart-container{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 25rem;
  border: 2px dashed lightgray;

  @media screen and (max-width: 1000px) {
    width: 21rem;
  }

  @media screen and (max-width: 800px) {
    width: 25rem;
  }

  @media screen and (max-width: 450px) {
    width: 17rem;
  }
`;

export const ButtonsContainer = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
gap: 2rem;
`
export const DownloadButton = styled.button`
  background-color: lightgray;
  color: black;
  border: none;
  margin: 5px 0;
  padding: 5px;
  font-size: 16px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  max-width: 2rem;
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
`;
export const DeleteButton = styled.button`
  background-color: lightgray;
  color: black;
  border: none;
  margin: 5px 0;
  padding: 5px;
  font-size: 16px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  max-width: 2rem;
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
`;

export const FiDownloadStyled = styled(FiDownload)`
  width: 1.2rem;
  height: 1.2rem;
  color: black;
`;
export const FiTrash2Styled = styled(FiTrash2)`
  width: 1.2rem;
  height: 1.2rem;
  color: black;
`;

export const DeleteConfirmation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent gray */
  display: flex;
  justify-content: center;
  align-items: center;

  wrapper {
    display: flex;
    flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
    font-size: 1.4rem;
    width: 25rem;
    height: 15rem;
    background-color: white;
    border: 2px solid black;
    padding: 20px;
    text-align: center;
    border-radius: 7px;
    margin: 0 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

    button {
      margin-top: 10px;
      margin-left: 10px;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 1.3rem;

     
    }
    .confirm-delete-button {
        background-color: pink;
        border: 2px solid red;
      }

      .cancel-button {
        background-color: lightgray;
      }
  }
`;

