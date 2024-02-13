import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand className="p-2" href="/">
                    Elektri Äpp
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/about" className="nav-link">About</Link>
                    {/* <Link to="/about/me" className="nav-link">About dev</Link>
                    <Link to="/about/gamma" className="nav-link">About app</Link> */}

                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;