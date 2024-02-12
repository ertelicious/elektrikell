import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import About from './About';


function HomeworkAbout() {

    const { aboutTab } = useParams();

    return (
        <Container>
            {aboutTab === 'gamma' ? (
                <Row>
                    <About />
                </Row>
            ) : (
                <Row>
                    <About />
                </Row>
            )}
        </Container>
    );
}

export default HomeworkAbout;
