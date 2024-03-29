import { Routes, Route } from "react-router-dom";
import ElectricPrice from "./ElectricPrice";
import About from "./About/About";
import Navigation from "./Navigation";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route
                    path="/" // homepage (см в navigation)
                    element={<ElectricPrice />} // какой компонент будет homepage'ом
                />
                {/* <Route path="lowprice/:hours" element={<ElectricPrice />} /> */}
                <Route path="/about" element={<About />} />
                {/* делаем id. для этого нам нужно два роута */}
                {/* <Route path=":who" element={<About />} /> */}

                {/* 404 error */}
                <Route path="*" element={<h1 className="text-center display-2 mt-4">404</h1>} />
            </Routes>
        </>
    );
}

export default App;
