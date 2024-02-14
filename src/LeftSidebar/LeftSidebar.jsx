import { Offcanvas } from 'react-bootstrap';
import SearchForm from './SearchForm';
import { useSelector, useDispatch } from 'react-redux';
import { setShowSidebar } from '../services/stateService';


function LeftSidebar() {

    const dispatch = useDispatch();
    const show = useSelector((state) => state.main.showSidebar);
    const handleClose = () => dispatch(setShowSidebar(false));

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search by dates</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <SearchForm handleClose={handleClose} />
            </Offcanvas.Body>
      </Offcanvas>
    )
}

export default LeftSidebar;