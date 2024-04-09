import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <Link to='/genshin-react/'>Home</Link>
        <Link to='/genshin-react/contato'>Contato</Link>
        <Link to='/genshin-react/sobre'>Sobre</Link>
        <Link to='/genshin-react/chiori'>Chiori</Link>
        <Link to='/genshin-react/baizhu'>Baizhu</Link>
    </nav>
  )
}

export default Header