import { useState, useEffect } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container'; 
import Head from './Head';
import Body from './Body';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import ErrorModal from './ErrorModal';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveHour, setErrorMessage } from './services/stateService';


function ElectricPrice() {
  const params = useParams(); // for useParams excercise
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.main.errorMessage);

  const [showSidebar, setShowSidebar] = useState(false);
  // const [isLoading, setIsLoading] = useState(true); //isLoading - is - ставят на boolean // hidden in branch style-additions

  const handleCloseSidebar = () => setShowSidebar(false);
  const handleOpenSidebar = () => setShowSidebar(true)

  //for useParams excercise + redux
  useEffect(() => { 
    if(params.hours) dispatch(setActiveHour(+params.hours));
  }, [params, dispatch]);
  

  return (
    <Container>
      <Head   
        handleOpenSidebar={handleOpenSidebar}
      />
      <Body />
      <Footer />
      <LeftSidebar 
        show={showSidebar} 
        handleClose={handleCloseSidebar} 
      />
      <ErrorModal 
        show={!!errorMessage}
        // errorMessage={errorMessage}
        handleClose={() => dispatch(setErrorMessage(null))}
      />
      {/* {isLoading && <h1>LOADING</h1>} */}
    </Container>
  );
}

export default ElectricPrice;
