import React from 'react'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'

import styles from '@styles/Kapela.module.css'

export default function Kapela() {
  return (
    <div className="page-wrapper">
      <Header/>

      <Footer/>
    </div>
  )
}
