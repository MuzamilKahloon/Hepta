import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import bca from '../../../public/images/slider-4.jpg.webp';
import '../hostels/Hostels.css';
import food from '../../../public/images/001-breakfast.svg';
import travel from '../../../public/images/002-planet-earth.svg';
import airplane from '../../../public/images/003-airplane.svg';
import beach from '../../../public/images/004-beach.svg';
import mount from '../../../public/images/005-mountains.svg';
import ballon from '../../../public/images/006-hot-air-balloon.svg';
import hero from '../../../public/images/hero_1.jpg.webp'
import long from '../../../public/images/img_1_long.jpg.webp';
import Slider from '../../components/slider/Slider'
import hotel from '../../../public/images/slider-6.jpg.webp'
import spa from '../../../public/images/slider-5.jpg.webp'
import room from '../../../public/images/img_3.jpg.webp'
import Footer from '../../components/footer/Footer';

const Hostels = () => {
    return (
        <>
            <div className="main-hotel">
                {/* Unique class for Hostels Navbar */}
                <Navbar className="hostels-navbar" />
                <div className="image-container">
                    <img src={bca} alt="Background" className="main-image" />
                </div>
                <div className="text-overlay">
                    <h1>Our Hotels</h1>
                    <p>A free template by <a href="#" target='_blank' rel="noopener noreferrer">Colorlib</a>. Download and share!</p>
                </div>
            </div>

            {/* Experience section */}
            <div className="icon-section-hos">
                <div className="icon-item-hos">
                    <img src={food} alt="Good Foods" />
                    <h1>Good Foods</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="icon-item-hos">
                    <img src={travel} alt="Travel Anywhere" />
                    <h1>Travel Anywhere</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="icon-item-hos">
                    <img src={airplane} alt="Airplane" />
                    <h1>Airplane</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
            <div className="icon-section-hos">
                <div className="icon-item-hos">
                    <img src={beach} alt="Beaches" />
                    <h1>Beaches</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="icon-item-hos">
                    <img src={mount} alt="Mountain Climbing" />
                    <h1>Mountain Climbing</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="icon-item-hos">
                    <img src={ballon} alt="Hot Air Balloon" />
                    <h1>Hot Air Balloon</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>

            {/* Family Room area */}
            <section className='section'>
                <div className="pt1">
                    <img src={hero} alt="Mountain" />
                </div>
                <div className="text-area">
                    <h3>Family Room</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <button className='btn-hos'>
                        LEARN MORE
                    </button>
                </div>
            </section>

            {/* presidential room */}
            <section className='section-2'>
                <div className="text-area-2">
                    <h3>Presidential Room</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <button className='btn-hos-2'>LEARN MORE</button>
                </div>
                <div className="pt1-2">
                    <img src={long} alt="Mountain" />
                </div>
            </section>



            {/* Slider section with content */}

            <section className='tour'>
                <h1>Hotel Gallery</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </section>

            <Slider />

            {/* Hotel Features */}


            <div className="blog-hos">
         <div className="content-section-hos">
              <h1>More Hotel Features</h1>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            <div className="cards-section-hos">
              <div className="blog1-hos">
                <img src={hotel} alt="" />
                <h1>45 Best Places To Unwind</h1>
              </div>
              <div className="blog2-hos">
              <img src={spa} alt="" />
                <h1>45 Best Places To Unwind</h1>
              </div>
              <div className="blog3-hos">
                <img src={room} alt="" />
                <h1>45 Best Places To Unwind</h1>
            </div>
            </div>
         </div>

      {/* Footer */}
      <Footer />
        </>
    );
};

export default Hostels;
