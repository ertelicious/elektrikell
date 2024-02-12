import { Routes, Route } from 'react-router-dom';
import ElectricPrice from './ElectricPrice';
import About from './About/About';
import Navigation from './Navigation';
import HomeworkAbout from './About/HomeworkAbout';


function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route
                    path="/" // homepage
                    element={<ElectricPrice />} // какой компонент будет homepage'ом
                />
  
                <Route path="/about" element={<About />} />

                {/* делаем id. для этого нам нужно два роута */}
                <Route path="/about/:id" element={<About />} />

                {/* 404 error */}
                <Route
                    path="*"
                    element={<h1 className="display-1 text-center mt-5">404</h1>}
                />

                <Route 
                    path="/homework/:aboutTab" 
                    element={<HomeworkAbout />} 
                />
            </Routes>
        </>
    );
}

export default App;
