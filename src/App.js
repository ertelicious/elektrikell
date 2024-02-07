import { useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container'; // доступ только к определённому компоненту
//import { Container } from 'react-bootstrap'; // доступ ко всем компонентам
import Head, { DEFAULT_ACTIVE_BUTTON } from './Head';
import Body from './Body';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import { getDefaultFrom, getDefaultUntil } from './utils/dates';
import ErrorModal from './ErrorModal';


function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeHour, setActiveHour] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [from, setFrom] = useState(getDefaultFrom());
  const [until, setUntil] = useState(getDefaultUntil());
  const [errorMessage, setErrorMessage] = useState(null);
  const [bestUntil, setBestUntil] = useState(0);

  const handleCloseSidebar = () => setShowSidebar(false);
  const handleOpenSidebar = () => setShowSidebar(true)

  return (
    <Container>
      <Head 
        activePrice={activePrice} 
        setActivePrice={setActivePrice}  
        handleOpenSidebar={handleOpenSidebar}
        setErrorMessage={setErrorMessage}
      />
      <Body 
        activeHour={activeHour} 
        from={from} 
        until={until} 
        setErrorMessage={setErrorMessage}
        setBestUntil={setBestUntil}
      />
      <Footer 
        activePrice={activePrice} 
        activeHour={activeHour} 
        setActiveHour={setActiveHour} 
        bestUntil={bestUntil}
      />
      <LeftSidebar 
        show={showSidebar} 
        handleClose={handleCloseSidebar} 
        from={from} 
        until={until}
        setFrom={setFrom}
        setUntil={setUntil}
      />
      <ErrorModal 
        show={!!errorMessage}
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
      {/* для boolean атрибута можно просто оставить show (и он будет true), вместо show={true} */}
    </Container>
  );
}

export default App;
