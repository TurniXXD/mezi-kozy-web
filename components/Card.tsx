import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Card({ children }:any) {
  return (
    <div className="card-wrapper">
      <div className="card row base-layer">
        { children }
      </div>
    </div>
  )
}
