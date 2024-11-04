import React, { useState } from 'react';
import '../contact/Contact.css';
import Navbar from '../../components/Navbar/Navbar';
import woman from '../../../public/images/slider-3.jpg.webp';
import Footer from '../../components/footer/Footer';
import per1 from '../../../public/images/person_1.jpg.webp'
import per2 from '../../../public/images/person_2.jpg.webp'
import per3 from '../../../public/images/person_3.jpg.webp'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="main-hotel">
        <Navbar className="hostels-navbar" />
        <div className="image-container">
          <img src={woman} alt="Background" className="main-image" />
        </div>
        <div className="text-overlay">
          <h1>Contact</h1>
          <p>A free template by <a href="#" target='_blank' rel="noopener noreferrer">Colorlib</a>. Download and share!</p>
        </div>
      </div>

      <div className="middle">
        <div className="my-form">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group half-width">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group half-width">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Write Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type='submit' className='btn-hos-form'>Send Message</button>
          </form>
        </div>

        <div className="information">
          <h2>Address:</h2>
          <p>98 West 21th Street, Suite 721 New York NY 10016</p>
          <h2>Phone:</h2>
          <p>(+1) 435 3533</p>
          <h2>Email:</h2>
          <p>info@yourdomain.com</p>
        </div>
      </div>

      {/* Happy Customers */}

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

      <Footer />
    </div>
  );
};

export default Contact;
