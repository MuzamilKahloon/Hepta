import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/home/Home'; // Adjust path as necessary
import Hostels from './Pages/hostels/Hostels';
import AboutUs from './Pages/aboutus/AboutUs'; 
import Gallery from './Pages/gallery/Gallery';
import News from './Pages/news/News'
import Contact from './Pages/contact/Contact'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/hostels" element={<Hostels />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contact" element={<Contact />} />
                    
                </Routes>
            </div>
        </Router>
    );
};

export default App;
