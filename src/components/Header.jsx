import {Link} from 'react-router-dom'

const Header = () => {
  return <header>
    <nav id='pc'>
        <div id='nav-cover'>
          <Link to='/' className='home-link'>GENSHIN&nbsp;<i class="fa-brands fa-meta"></i>&nbsp;BUILD</Link>
          <div id='pc-nav'>

            <Link to='/' id='characters-pop-up'><i class="fa-solid fa-image-portrait"></i>&nbsp;Personagens
              <div id='pop-up-list'>
                <div>ANEMO<i class="fa-solid fa-caret-right sieta" aria-hidden="true"></i></div>
                <div>CRYO<i class="fa-solid fa-caret-right sieta" aria-hidden="true"></i></div>
                <div>DENDRO<i class="fa-solid fa-caret-right sieta" aria-hidden="true"></i></div>
                <div>ELETRO<i class="fa-solid fa-caret-right sieta" aria-hidden="true"></i></div>
                <div>GEO<i class="fa-solid fa-caret-right sieta" aria-hidden="true"></i></div>
                <div>HYDRO<i class="fa-solid fa-caret-right sieta" aria-hidden="true"></i></div>
                <div>PYRO<i class="fa-solid fa-caret-right sieta" aria-hidden="true"></i></div>
              </div>
            </Link>

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