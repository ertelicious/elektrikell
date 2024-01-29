import { Offcanvas } from "react-bootstrap";
import SearchForm from "./SearchForm";


function LeftSidebar({ show, handleClose }) {
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <SearchForm />
            </Offcanvas.Body>
      </Offcanvas>
    )
}

export default LeftSidebar;