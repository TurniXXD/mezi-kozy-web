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
        <div className="image-wrapper">
          <Image src="/../public/images/1-krmelec-koncert.png" alt="fajne" layout="fill" />
        </div>
        <div className="image-wrapper">
          <Image src="/../public/images/2-krmelec-koncert.png" alt="fajne" layout="fill" />
        </div>
        <div className="image-wrapper">
          <Image src="/../public/images/3-krmelec-koncert.png" alt="fajne" layout="fill" />
        </div>
      </Slider>
      <Footer/>
    </div>
  )
}
