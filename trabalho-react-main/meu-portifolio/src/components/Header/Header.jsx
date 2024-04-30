import { header } from '../../portfolio'
// import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='h-2 max-w-[1100px]  flex'>
      <h3>
        {homepage ? (
          <a href={homepage} className='text-red-500'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      {/* <Navbar/> */}
    </header>
 )
}

export default Header

// .header {
//   height: 8em;
//   max-width: 1100px;
//   width: 95%;
//   margin: 0 auto;
//   justify-content: space-between;
// }

