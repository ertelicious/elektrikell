import { useState, useEffect } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container'; // доступ только к определённому компоненту
//import { Container } from 'react-bootstrap'; // доступ ко всем компонентам
// import Head, { DEFAULT_ACTIVE_BUTTON } from './Head'; // not sure
import Head from './Head';
import Body from './Body';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
// import { getDefaultFrom } from './utils/dates';
import ErrorModal from './ErrorModal';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveHour } from './services/stateService';


function ElectricPrice() {
  const params = useParams(); // for useParams excercise
  const dispatch = useDispatch();

  const [showSidebar, setShowSidebar] = useState(false);
  // const [from, setFrom] = useState(getDefaultFrom());
  const [errorMessage, setErrorMessage] = useState(null);
  const [bestUntil, setBestUntil] = useState(0);
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
        setErrorMessage={setErrorMessage}
      />
      <Body  
        setErrorMessage={setErrorMessage}
        setBestUntil={setBestUntil}
        // setIsLoading={setIsLoading} // hidden in branch style-additions
      />
      <Footer 
        bestUntil={bestUntil}
      />
      <LeftSidebar 
        show={showSidebar} 
        handleClose={handleCloseSidebar} 
      />
      <ErrorModal 
        show={!!errorMessage}
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
      {/* для boolean атрибута можно просто оставить show (и он будет true), вместо show={true} */}
      {/* {isLoading && <h1>LOADING</h1>} */}
    </Container>
  );
}

export default ElectricPrice;
