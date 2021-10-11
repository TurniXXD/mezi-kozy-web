import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='header-wrapper'>
      <ul className='row nav-items flex-wrap'>
        <li className='nav-item '>
          <Link href='/'>
            <a className='nav-item'>HOME</a>
          </Link>
        </li>
        <li className='nav-item '>
          <Link href='/aktuality'>
            <a className='nav-item'>AKTUALITY</a>
          </Link>
        </li>
        <li className='nav-item '>
          <Link href='/kapela'>
            <a className='nav-item'>KAPELA</a>
          </Link>
        </li>
        <li className='nav-item '>
          {/* domyslet redirect na nejaktuálnější galerii a left sidebar na orientaci v ní */}
          <Link href='/galerie'>
            <a className='nav-item'>GALERIE</a>
          </Link>
        </li>
        <li className='nav-item '>
          <Link href='/kotankty'>
            <a className='nav-item'>KONTAKTY</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}