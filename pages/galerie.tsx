import React from 'react'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'

import styles from '@styles/Galerie.module.css'

export default function Galerie() {
  return (
    <div className="page-wrapper">
      <Header/>

      <Footer/>
    </div>
  )
}
