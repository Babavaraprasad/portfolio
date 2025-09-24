import {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileSection from '../components/ProfileSection';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';
import projects from '../data/projects';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
const settings = {
    dots: true,              
    infinite: false,         
    speed: 500,              
    slidesToShow: 3,         
    slidesToScroll: 3,      
    responsive: [
      {
        breakpoint: 1024,    
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,     
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <ProfileSection />
        <section className={styles.projectsSection}>
          <h2>My Projects</h2>
          <Slider {...settings}>
          {/* <div className={styles.projectsGrid}> */}
            {projects.map((project, index) => ( 
              <Card key={index} {...project} />
            ))}
            </Slider>
            {/* </div> */}
        </section>
      </main>
      <Footer />
    </div>
  );
}
