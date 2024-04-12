import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Header = () => {
  return <header>
    <nav id='pc'>
        <div id='nav-cover'>
          <Link to='/' className='home-link header-hover'>GENSHIN&nbsp;<i class="fa-brands fa-meta"></i>&nbsp;BUILD</Link>
          <div id='pc-nav'>

            <Link to='/'><i class="fa-solid fa-image-portrait"></i>&nbsp;Personagens</Link>
            <Link to='/tier-list'><i class="fa-solid fa-people-group"></i>&nbsp;Tier-List</Link>
            <Link to='/times'><i class="fa-solid fa-users"></i>&nbsp;Times</Link>
            <Link to='/farming'><i class="fa-solid fa-wheat-awn" ></i>&nbsp;Farming</Link>
            <Link to='https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481' target='_blank'><i class="fa-solid fa-check-double"></i>&nbsp;Check-In</Link>
          </div>
        </div>
    </nav>
    <br />
    <nav id='mobile'>
        <Link to='/' className='home-link'>GENSHIN&nbsp;<i class="fa-brands fa-meta"></i>&nbsp;BUILD</Link>
        <i class="fa-solid fa-bars"></i>
    </nav>
    </header>
}

export default Header