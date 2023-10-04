import { Container, ContainerItems, FirstTitle } from './styles'
import LogoutButton from "../../components/Logout/index.jsx";


const MyCharts = () => {

  return (
    <Container>
      <FirstTitle>MY CHARTS</FirstTitle>
      <ContainerItems>
        <h1>MY CHARTS</h1>
      </ContainerItems>
      <LogoutButton>Logout</LogoutButton>


    </Container>
  );
};

export default MyCharts;
