import { Container, ContainerItems, FirstTitle } from './styles'
import LogoutButton from "../../components/Logout/index.jsx";



const MyCharts = () => {

  return (
    <Container>
      <FirstTitle>MY CHARTS</FirstTitle>
      <ContainerItems>
        <h1>You does not have saved Charts yet, <a>create now</a></h1>
      </ContainerItems>
      <LogoutButton>Logout</LogoutButton>


    </Container>
  );
};

export default MyCharts;
