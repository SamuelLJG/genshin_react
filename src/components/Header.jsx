import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <Link to='genshin_react/'>Home</Link>
        <Link to='genshin_react/contato'>Contato</Link>
        <Link to='genshin_react/sobre'>Sobre</Link>
        <Link to='genshin_react/chiori'>Chiori</Link>
    </nav>
  )
}

export default Header