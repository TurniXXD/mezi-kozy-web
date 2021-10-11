import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Header from '@components/Header'
import Footer from '@components/Footer'

import styles from '@styles/Home.module.css'

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="page-wrapper">
      <Header/>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <Footer/>
    </div>
  )
}
