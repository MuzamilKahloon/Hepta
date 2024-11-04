import React from 'react'
import '../gallery/Gallery.css'
import Navbar from '../../components/Navbar/Navbar'
import long from '../../../public/images/img_1_long.jpg.webp';
import Footer from '../../components/footer/Footer';
import hotel from '../../../public/images/slider-6.jpg.webp'
import spa from '../../../public/images/slider-5.jpg.webp'
import room from '../../../public/images/img_3.jpg.webp'
import climb from '../../../public/images/moutain.webp'
const Gallery = () => {
  return (
    <div>
         <div className="main-hotel">
                {/* Unique class for Hostels Navbar */}
                <Navbar className="hostels-navbar" />
                <div className="image-container">
                    <img src={long} alt="Background" className="main-image" />
                </div>
                <div className="text-overlay">
                    <h1>Gallery</h1>
                    <p>A free template by <a href="#" target='_blank' rel="noopener noreferrer">Colorlib</a>. Download and share!</p>
                </div>
            </div>

            {/* Images section */}
             <div className="images-container">
              <div className="cont-1">
                <img src={hotel} alt="" />
                <img src={spa} alt="" />
                <img src={room} alt="" />
                <img src={climb} alt="" />
              </div>
              <div className="cont-2">
              <img src={room} alt="" />
              <img src={climb} alt="" />
              <img src={hotel} alt="" />
                <img src={spa} alt="" />
              </div>
              <div className="cont-3 special">
              <img src={hotel} alt="" />
              <img src={spa} alt="" />
              </div>
              <div className="cont-4">
              <img src={hotel} alt="" />
                <img src={spa} alt="" />
                <img src={room} alt="" />
                <img src={climb} alt="" />
              </div>
             </div>
            {/* Footer */}

            <Footer />
    </div>
  )
}

export default Gallery
