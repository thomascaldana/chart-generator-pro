import styled from 'styled-components'
import { FiDownload } from 'react-icons/fi'


export const FirstTitle = styled.h1`
font-family: 'Preahvihear',sans-serif;
  text-align: center;
  font-size: 1.6rem;
  margin-top: 2.5rem;

`

export const Container = styled.div`

    margin: 7rem auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;

  @media screen and (max-width: 450px){
    margin: 5rem auto;
    gap: 2rem;
  }

`
export const ContainerItems = styled.div`

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;

  @media screen and (max-width: 450px){
    margin: 5rem auto;
    gap: 2rem;
  }

`

export const FiDownloadStyled = styled(FiDownload)`
width: 1.2rem;
height: 1.2rem;
color: black;
`

export const ContainerImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 1rem;
  align-items: center;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 450px) {
    gap: 3rem;
  }
`;
export const Img = styled.img`
  width: 25rem;
  border: 2px dashed lightgray;

  @media screen and (max-width: 1000px){
    width: 21rem;
  }

  @media screen and (max-width: 800px){
    width: 25rem;
  }
  
  @media screen and (max-width: 450px){
    width: 17rem;
  }

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
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle box shadow on hover */
  }
`

export const SavedChartContainer = styled.div`

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`