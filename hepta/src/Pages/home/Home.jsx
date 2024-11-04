import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider'
import Back from '../../../public/images/hero_1.jpg.webp';
import long from '../../../public/images/img_1_long.jpg.webp';
import { FaRegPlayCircle } from "react-icons/fa";
import Footer from '../../components/footer/Footer';
import per1 from '../../../public/images/person_1.jpg.webp'
import per2 from '../../../public/images/person_2.jpg.webp'
import per3 from '../../../public/images/person_3.jpg.webp'
import food from '../../../public/images/001-breakfast.svg'
import travel from '../../../public/images/002-planet-earth.svg'
import airplane from '../../../public/images/003-airplane.svg'
import beach from '../../../public/images/004-beach.svg'
import mount from '../../../public/images/005-mountains.svg'
import ballon from '../../../public/images/006-hot-air-balloon.svg'
import hotel from '../../../public/images/slider-6.jpg.webp'
import spa from '../../../public/images/slider-5.jpg.webp'
import room from '../../../public/images/img_3.jpg.webp'
import climb from '../../../public/images/moutain.webp'

const Home = () => {
    return (
        <>
            <div className="main">
                <Navbar />
                <img src={Back} alt="Background" className="main-image" />
                <div className="text-overlay">
                    <h1>Travel & Tours</h1>
                    <p>A free template by <a href="#" target='_blank' rel="noopener noreferrer">Colorlib</a>. Download and share!</p>
                    <button className="visit-btn">Visit Colorlib</button>
                </div>
            </div>
            <section className='section'>
    <div className="pt1">
        <img src={long} alt="Mountain" />
    </div>
    <div className="text-area">
        <h3>Welcome To Our Website</h3>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <button className='btn'>
            <FaRegPlayCircle className='play-icon' /> WATCH THE VIDEO
        </button>
    </div>
</section>

            {/* Customer Experience */}

    <section className='experience'>
    <div className="txt">
        <h1>Experience Once In Your Life Time</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
    <div className="icon-section">
        <div className="icon-item">
            <img src={food} alt="Good Foods" />
            <h1>Good Foods</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="icon-item">
            <img src={travel} alt="Travel Anywhere" />
            <h1>Travel Anywhere</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="icon-item">
            <img src={airplane} alt="Airplane" />
            <h1>Airplane</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
    </div>
    <div className="icon-section">
        <div className="icon-item">
            <img src={beach} alt="Beaches" />
            <h1>Beaches</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="icon-item">
            <img src={mount} alt="Mountain Climbing" />
            <h1>Mountain Climbing</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="icon-item">
            <img src={ballon} alt="Hot Air Balloon" />
            <h1>Hot Air Balloon</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
    </div>
</section>

      <section className='tour'>
        <h1>International Tour Management.</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      </section>

      <Slider />


      {/* Blogs */}
         <div className="blog">
         <div className="content-section">
              <h1>Recent Blog Post</h1>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            <div className="cards-section">
              <div className="blog1">
                <img src={hotel} alt="" />
                <span>February 26, 2018</span>
                <h1>45 Best Places To Unwind</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>      
              </div>
              <div className="blog2">
              <img src={spa} alt="" />
                <span>February 26, 2018</span>
                <h1>45 Best Places To Unwind</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>      
              </div>
              <div className="blog3">
                <img src={room} alt="" />
                <span>February 26, 2018</span>
                <h1>45 Best Places To Unwind</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>      </div>
            </div>
         </div>
            
            {/* Customer feedback section */}
            <section className='cust'>
    <h1>Happy Customers</h1>
    <div className="persons">
        <div className="person">
            <img src={per1} alt="Clare Gupta" />
            <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
            <span>— Clare Gupta</span>
        </div>
        <div className="person">
            <img src={per2} alt="Rogie Slater" />
            <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
            <span>— Rogie Slater</span>
        </div>
        <div className="person">
            <img src={per3} alt="John Doe" />
            <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
            <span>— John Doe</span>
        </div>
    </div>
</section>

        {/* Top Destination Section */}
        <section className="top-destination">
      <div className="heading">
        <h1>Top Destination</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto
          doloremque quo <br /> odio repudiandae sunt eveniet? Enim facilis laborum
          voluptate id porro, culpa maiores <br /> quis, blanditiis laboriosam alias. Sed.
        </p>
      </div>

      <div className="destination-grid">
        <div className="destination-item">
          <img src={hotel} alt="Food & Wines" />
          <h3>Food & Wines</h3>
          <div className="reviews">
            <span className="stars">★★★★☆</span>
            <span className="review-count">3,239 reviews</span>
          </div>
        </div>

        <div className="destination-item">
          <img src={spa} alt="Resort & Spa" />
          <h3>Resort & Spa</h3>
          <div className="reviews">
            <span className="stars">★★★★☆</span>
            <span className="review-count">4,921 reviews</span>
          </div>
        </div>

        <div className="destination-item">
          <img src={room} alt="Hotel Rooms" />
          <h3>Hotel Rooms</h3>
          <div className="reviews">
            <span className="stars">★★★★☆</span>
            <span className="review-count">2,112 reviews</span>
          </div>
        </div>

        <div className="destination-item">
          <img src={climb} alt="Mountain Climbing" />
          <h3>MountainClimbing</h3>
          <div className="reviews">
            <span className="stars">★★★★☆</span>
            <span className="review-count">6,421 reviews</span>
          </div>
        </div>
      </div>
    </section>
              < slide />
            <Footer />
        </>


    );
};

export default Home;
