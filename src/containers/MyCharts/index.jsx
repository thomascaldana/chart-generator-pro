import { useEffect, useState } from "react";
import { Container, FirstTitle, Img, DownloadButton, FiDownloadStyled, GlobalContainer, FiTrash2Styled, DeleteButton, ButtonsContainer, DeleteConfirmation } from './styles'
//import LogoutButton from "../../components/Logout/index.jsx";
//import { Link } from 'react-router-dom';



const MyCharts = () => {

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [chartToDelete, setChartToDelete] = useState(null);

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

  const deleteChart = (chartId) => {
    const storedCharts = JSON.parse(localStorage.getItem('savedCharts')) || [];
    const updatedCharts = storedCharts.filter((chart) => chart.id !== chartId);

    if (updatedCharts.length === storedCharts.length) {
      // If no charts were deleted, return
      return;
    }

    localStorage.setItem('savedCharts', JSON.stringify(updatedCharts));
    setSavedCharts(updatedCharts);

    // Reset chartToDelete and hide the confirmation dialog
    setChartToDelete(null);
    setShowDeleteConfirmation(false);
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
                <ButtonsContainer>
                  <DownloadButton type="button"
                    onClick={() => downloadChartImage(chart.chartUrl)}
                  >

                    <FiDownloadStyled />
                  </DownloadButton>
                  <DeleteButton type="button" onClick={() => {
                    setChartToDelete(chart.id);
                    setShowDeleteConfirmation(true);
                  }}>
                    <FiTrash2Styled /> {/* Trash can icon */}
                  </DeleteButton>
                </ButtonsContainer>

              )}
            </div>
          ))}
        </Container>
      </GlobalContainer>
      {showDeleteConfirmation && (
        <DeleteConfirmation>
          <wrapper>
            <p>Are you sure you want to delete this chart?</p>
            <div>
              <button className="confirm-delete-button" onClick={() => deleteChart(chartToDelete)}>Yes, Delete</button>
              <button className="cancel-button" onClick={() => setShowDeleteConfirmation(false)}>Cancel</button>
            </div>
          </wrapper>
        </DeleteConfirmation>
      )}
    </>
  );
};

export default MyCharts;
