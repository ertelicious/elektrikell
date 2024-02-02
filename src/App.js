import { useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container'; // доступ только к определённому компоненту
//import { Container } from 'react-bootstrap'; // доступ ко всем компонентам
import Head, { DEFAULT_ACTIVE_BUTTON } from './Head';
import Body from './Body';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import { getDefaultFrom, getDefaultUntil } from './utils/dates';


function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeHour, setActiveHour] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [from, setFrom] = useState(getDefaultFrom());
  const [until, setUntil] = useState(getDefaultUntil());

  const handleCloseSidebar = () => setShowSidebar(false);
  const handleOpenSidebar = () => setShowSidebar(true)

  return (
    <Container>
      <Head 
        activePrice={activePrice} 
        setActivePrice={setActivePrice}  
        handleOpenSidebar={handleOpenSidebar} 
      />
      <Body 
        activeHour={activeHour} 
        from={from} 
        until={until} 
      />
      <Footer 
        activePrice={activePrice} 
        activeHour={activeHour} 
        setActiveHour={setActiveHour} 
      />
      <LeftSidebar 
        show={showSidebar} 
        handleClose={handleCloseSidebar} 
        from={from} 
        until={until}
        setFrom={setFrom}
        setUntil={setUntil}
      />
    </Container>
  );
}

export default App;
