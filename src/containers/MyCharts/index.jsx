import { useEffect, useState } from "react";
import { Container, FirstTitle, Img, DownloadButton, FiDownloadStyled, GlobalContainer } from './styles'
//import LogoutButton from "../../components/Logout/index.jsx";
//import { Link } from 'react-router-dom';



const MyCharts = () => {


  const downloadChartImage = (chartUrl) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', chartUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      const blob = xhr.response;
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'chart.png';
      link.click();
    };
    xhr.send();
  };

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
                <DownloadButton type="button"
                  onClick={() => downloadChartImage(chart.chartUrl)}
                >
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
