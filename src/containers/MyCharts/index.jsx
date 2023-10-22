import { useEffect, useState } from "react";
import { Container, FirstTitle, Img, DownloadButton, FiDownloadStyled, GlobalContainer } from './styles'
//import LogoutButton from "../../components/Logout/index.jsx";
//import { Link } from 'react-router-dom';



const MyCharts = () => {


  const [savedCharts, setSavedCharts] = useState([]);

  useEffect(() => {
    // Retrieve saved chart data from local storage
    const storedCharts = JSON.parse(localStorage.getItem('savedCharts')) || [];
    setSavedCharts(storedCharts);
  }, []);

  return (
    <>
      <FirstTitle>My Charts</FirstTitle>
      <GlobalContainer>
        <Container>
          {savedCharts.map((chart) => (
            <div className="my-chart-container" key={chart.id}>
              <Img src={chart.chartUrl} alt={`Chart ${chart.id}`} />
              {chart.id && (
                <DownloadButton type="button">
                  <FiDownloadStyled />
                </DownloadButton>
              )}
            </div>
          ))}
        </Container>
      </GlobalContainer>
    </>
  );
};

export default MyCharts;
