import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../news/News.css'
import climb from '../../../public/images/moutain.webp'
import Footer from '../../components/footer/Footer'
import hotel from '../../../public/images/slider-6.jpg.webp'
import spa from '../../../public/images/slider-5.jpg.webp'
import { FaSearch } from 'react-icons/fa';
const News = () => {
  return (
    <div>
      <div className="main-hotel">
        {/* Unique class for Hostels Navbar */}
        <Navbar className="hostels-navbar" />
        <div className="image-container">
          <img src={climb} alt="Background" className="main-image" />
        </div>
        <div className="text-overlay">
          <h1>Blog</h1>
          <p>A free template by <a href="#" target='_blank' rel="noopener noreferrer">Colorlib</a>. Download and share!</p>
        </div>
      </div>
      {/* Cards of blog */}
      <div className="cards-blog">
        <div className="card-sec-blog">
          <div className="card-sec-1">
            <div className="blog1-news">
              <img src={hotel} alt="" />
              <h1>45 Best Places To Unwind</h1>
            </div>
            <div className="blog2-news">
              <img src={spa} alt="" />
              <h1>45 Best Places To Unwind</h1>
            </div>
          </div>
          <div className="card-sec-2">
            <div className="blog2-news">
              <img src={spa} alt="" />
              <h1>45 Best Places To Unwind</h1>
            </div>
            <div className="blog1-news">
              <img src={hotel} alt="" />
              <h1>45 Best Places To Unwind</h1>
            </div>
          </div>
        </div>
        <div className="card-sec-form">
          <div className="card-form">
            <div className="search-container">
              <FaSearch className="search-icon" />  {/* React icon component */}
              <input type="text" placeholder="Search..." className="search-input" />
            </div>
          </div>

          <div className="popular-posts-container">
            <h2 className="section-title">Popular Post</h2>
            <div className="posts-list">
              <div className="post-item">
                <img src={hotel} alt="Hotel" className="post-image" />
                <div className="post-details">
                  <span className="post-date">February 27, 2018</span>
                  <h3 className="post-title">Free Template by Colorlib</h3>
                </div>
              </div>
              <div className="post-item">
                <img src={spa} alt="Spa" className="post-image" />
                <div className="post-details">
                  <span className="post-date">February 27, 2018</span>
                  <h3 className="post-title">Free Template by Colorlib</h3>
                </div>
              </div>
              <div className="post-item">
                <img src={hotel} alt="Hotel" className="post-image" />
                <div className="post-details">
                  <span className="post-date">February 27, 2018</span>
                  <h3 className="post-title">Free Template by Colorlib</h3>
                </div>
              </div>
              <div className="post-item">
                <img src={spa} alt="Spa" className="post-image" />
                <div className="post-details">
                  <span className="post-date">February 27, 2018</span>
                  <h3 className="post-title">Free Template by Colorlib</h3>
                </div>
              </div>
              <div className="post-item">
                <img src={hotel} alt="Hotel" className="post-image" />
                <div className="post-details">
                  <span className="post-date">February 27, 2018</span>
                  <h3 className="post-title">Free Template by Colorlib</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="categories-container">
      <h2 className="section-title">Categories</h2>
      <ul className="categories-list">
        <li className="category-item">
          <span className="category-name">Events</span>
          <span className="category-count">(12)</span>
        </li>
        <li className="category-item">
          <span className="category-name">Resto bar</span>
          <span className="category-count">(4)</span>
        </li>
        <li className="category-item">
          <span className="category-name">Celebration</span>
          <span className="category-count">(23)</span>
        </li>
        <li className="category-item">
          <span className="category-name">Promos</span>
          <span className="category-count">(8)</span>
        </li>
      </ul>
    </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default News
