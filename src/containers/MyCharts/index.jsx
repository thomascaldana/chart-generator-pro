import { useEffect, useState } from "react";
import { Container, ContainerItems, FirstTitle, Img, DownloadButton, FiDownloadStyled, SavedChartContainer } from './styles'
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
        {savedCharts.map((chart) => (
          <SavedChartContainer key={chart.id}>
            <Img src={chart.chartUrl} alt={`Chart ${chart.id}`} />
            {chart.id && ( // Verifique se chart.id é válido antes de renderizar o botão de download
              <DownloadButton type="button">
                {<FiDownloadStyled />}
              </DownloadButton>
            )}
          </SavedChartContainer>
        ))}
      </ContainerItems>
      <LogoutButton>Logout</LogoutButton>
    </Container>
  );
};

export default MyCharts;
