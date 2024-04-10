import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/contato'>Contato</Link>
        <Link to='/sobre'>Sobre</Link>
        <Link to='/chiori'>Chiori</Link>
        <Link to='/baizhu'>Baizhu</Link>
    </nav>
  )
}

export default Header