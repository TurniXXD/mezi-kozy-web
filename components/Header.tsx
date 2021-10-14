import Link from 'next/link'
import Image from 'next/image'
import Card from '@components/Card'

// function for splitting posts in equal halfs => two columns
const posts = [
  {
    id: "1",
    title: "19.11. Hospoda 1"
  },
  {
    id: "2",
    title: "4.12. Hospoda 1"
  },
  {
    id: "3",
    title: "10.1. Hospoda 1"
  },
  {
    id: "4",
    title: "20.1. Hospoda 1"
  }
]

export default function Header() {
  return (
    <div className='header-wrapper'>
      <nav className="">
        <ul className='row nav-items'>
        <li className='nav-item '>
            <Link href='/'>
              <a className='nav-item '>HOME</a>
            </Link>
          </li>
          <li className='nav-item '>
            <Link href='/aktuality'>
              <a className='nav-item '>AKTUALITY</a>
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
            <Link href='/kontakty'>
              <a className='nav-item'>KONTAKTY</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="row header-table">
        <Card>
          <div className="col flex-center logo">
            <Link href='/'>
              <a className="image-wrapper">
                <Image src="/../public/images/logo/logo-header-table.png" alt="fajne" layout="fill" />
              </a>
            </Link>
          </div>
          <div className="col flex-center program">
            <div className="row flex-center">
              <div className="col flex-center">
                {posts && posts.map(post => {
                  return(
                  <div className="row flex-center">
                    <Link href='/aktuality/[post]' as={`/aktuality/${post?.id}`}>
                      <a className='header-table-item'>{post?.title}</a>
                    </Link>
                  </div>
                  )
                })}
              </div>
              <div className="col flex-center">
                {posts && posts.map(post => {
                  return(
                  <div className="row flex-center">
                    <Link href='/aktuality/[post]' as={`/aktuality/${post?.id}`}>
                      <a className='header-table-item'>{post?.title}</a>
                    </Link>
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}