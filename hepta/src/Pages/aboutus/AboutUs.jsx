import React from 'react';
import '../aboutus/AboutUs.css'
import Navbar from '../../components/navbar/Navbar';
import long from '../../../public/images/img_1_long.jpg.webp';
import hero from '../../../public/images/hero_1.jpg.webp'
import Slider from '../../components/slider/Slider'
import per1 from '../../../public/images/person_1.jpg.webp'
import per2 from '../../../public/images/person_2.jpg.webp'
import per3 from '../../../public/images/person_3.jpg.webp'
import Footer from '../../components/footer/Footer';

const AboutUs = () => {
  return (
    <>
        
        <div className="main-hotel">
                {/* Unique class for Hostels Navbar */}
                <Navbar className="hostels-navbar" />
                <div className="image-container">
                    <img src={long} alt="Background" className="main-image" />
                </div>
                <div className="text-overlay">
                    <h1>About Us</h1>
                    <p>A free template by <a href="#" target='_blank' rel="noopener noreferrer">Colorlib</a>. Download and share!</p>
                </div>
            </div>


            {/* Welcome section */}

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


            {/* Slider section with content */}

            <section className='tour'>
                <h1>Hotel Gallery</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </section>

            <Slider />


            {/* Team Section */}

            <section className="team">
      <div className="heading">
        <h1>Team</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto
          doloremque quo <br /> odio repudiandae sunt eveniet? Enim facilis laborum
          voluptate id porro, culpa maiores <br /> quis, blanditiis laboriosam alias. Sed.
        </p>
      </div>

      <div className="team-grid">
        <div className="team-item">
          <img src={per1} alt="Food & Wines" />
          <span>CEO, Co-Founder</span>
          <h3>Vince Richardson</h3>
          
        </div>

        <div className="team-item">
          <img src={per2} alt="Resort & Spa" />
          <span>CTO, Co-Founder</span>
          <h3>Jean Love</h3>
          
        </div>

        <div className="team-item">
          <img src={per3} alt="Hotel Rooms" />
          <span>Marketer, Co-Founder</span>
          <h3>Jeff Stark</h3>
          
        </div>
        </div>
        
    </section>
          {/* Footer */}
          <Footer />
    </>
  );
};

export default AboutUs;
