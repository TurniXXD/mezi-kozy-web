import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='footer-wrapper'>
      <ul className='nav-items flex-wrap'>
        <li className='nav-item '>
          <Link href='/index'>
            <a className='nav-item'></a>
          </Link>
          <Link href='/index'>
            <a className='nav-item'>HOME</a>
          </Link>
          <Link href='/aktuality'>
            <a className='nav-item'>AKTUALITY</a>
          </Link>
          <Link href='/kapela'>
            <a className='nav-item'>KAPELA</a>
          </Link>
          {/* domyslet redirect na nejaktuálnější galerii a left sidebar na orientaci v ní */}
          <Link href='/galerie'>
            <a className='nav-item'>GALERIE</a>
          </Link>
          <Link href='/kotankty'>
            <a className='nav-item'>KONTAKTY</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}