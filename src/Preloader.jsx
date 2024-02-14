// import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";


function Preloader() {

    // const isLoading = useSelector((state) => state.main.isLoading);

    return (
        <Spinner animation="grow" variant="primary" />
    );
}

export default Preloader;
