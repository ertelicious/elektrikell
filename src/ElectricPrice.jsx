import { useEffect } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container'; 
import Head from './Head';
import Body from './Body';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import ErrorModal from './ErrorModal';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveHour } from './services/stateService';
// import Preloader from './Preloader';


function ElectricPrice() {
  const params = useParams(); // for useParams excercise
  const dispatch = useDispatch();


  //for useParams excercise + redux
  useEffect(() => { 
    if(params.hours) dispatch(setActiveHour(+params.hours));
  }, [params, dispatch]);
  

  return (
    <Container>
      <Head />
      <Body />
      <Footer />
      <LeftSidebar/>
      <ErrorModal />
      {/* <Preloader /> */}
    </Container>
  );
}

export default ElectricPrice;
