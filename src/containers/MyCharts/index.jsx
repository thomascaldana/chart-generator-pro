import { useEffect, useState } from "react";
import { Container, ContainerItems, FirstTitle } from './styles'
import LogoutButton from "../../components/Logout/index.jsx";
import { Link } from 'react-router-dom';



const MyCharts = () => {


  const [savedCharts, setSavedCharts] = useState([]);

  useEffect(() => {
    // Retrieve saved chart data from local storage
    const storedCharts = JSON.parse(localStorage.getItem('savedCharts')) || [];
    setSavedCharts(storedCharts);
  }, []);

  return (
    <Container>
      <FirstTitle>MY CHARTS</FirstTitle>
      <ContainerItems>
        {savedCharts.length === 0 ? (
          <h1>You do not have any saved charts yet, <Link to='/'>create now</Link></h1>
        ) : (
          <div>
            {savedCharts.map((chart) => (
              <img key={chart.id} src={chart.chartUrl} alt={`Chart ${chart.id}`} />
            ))}
          </div>
        )}
      </ContainerItems>
      <LogoutButton>Logout</LogoutButton>
    </Container>
  );
};

export default MyCharts;
