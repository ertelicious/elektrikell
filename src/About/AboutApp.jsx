import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function AboutApp() {
    console.log("AboutApp"); 
    return(
        <>
             <Container className="my-1 pt-2"> 
                <Row className="about-container-ve">
                    <h1 className="display-2 p-0">About ./app</h1> 
                    This application was created as part of the Gamma Intelligence Front-End development course.
                </Row>
                <Row className="mx-3 pt-3">
                    The application displays the prices of the Nord Pool market for the next day, which are loaded from the Elering LIVE portal. These prices are part of the electricity bill for consumers with a market package, which change hourly, providing an opportunity for savings by catching lower prices. We also display the cheapest electricity price hours at selected and/or indicated times, which can be beneficial for planning electricity consumption.
                </Row>
                <Row className="mx-3 pt-3">
                    The source https://www.elektrikell.ee was used as a basis for building the educational application.
                </Row>
            </Container> 
         </>
    );
}
export default AboutApp;
