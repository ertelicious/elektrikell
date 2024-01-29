import { useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container'; // доступ только к определённому компоненту
//import { Container } from 'react-bootstrap'; // доступ ко всем компонентам
import Head, { DEFAULT_ACTIVE_BUTTON } from './Head';
import Body from './Body';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';


function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeHour, setActiveHour] = useState();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleCloseSidebar = () => setShowSidebar(false);
  const handleOpenSidebar = () => setShowSidebar(true)

  return (
    <Container>
      <Head activePrice={activePrice} setActivePrice={setActivePrice}  handleOpenSidebar={handleOpenSidebar}/>
      <Body activeHour={activeHour}/>
      <Footer 
        activePrice={activePrice} 
        activeHour={activeHour} 
        setActiveHour={setActiveHour} />
      <LeftSidebar show={showSidebar} handleClose={handleCloseSidebar} />
    </Container>
  );
}

export default App;
