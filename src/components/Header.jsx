import {Link} from 'react-router-dom'

  function Mobile() {
    var x = document.getElementById('mobile-links')
    var y = document.getElementById('mobile-button')
    var a = document.getElementById('close-menu')
    var b = document.getElementById('open-menu')
  if (y.checked===false) {
      x.style.display='block'
      a.style.display='block'
      b.style.display='none'
  } else {
      x.style.display='none'
      a.style.display='none'
      b.style.display='block'
  }}

const Header = () => {
  return <header>
    <nav id='pc'>
        <div id='nav-cover'>
          <Link to='/' className='home-link header-hover'>GENSHIN&nbsp;<i className="fa-brands fa-meta"></i>&nbsp;BUILD</Link>
          <div id='pc-nav'>

            <Link to='/'><i className="fa-solid fa-image-portrait"></i>&nbsp;Personagens</Link>
            <Link to='/tier-list'><i className="fa-solid fa-people-group"></i>&nbsp;Tier-List</Link>
            <Link to='/times'><i className="fa-solid fa-users"></i>&nbsp;Times</Link>
            <Link to='/farming'><i className="fa-solid fa-wheat-awn" ></i>&nbsp;Farming</Link>
            <Link to='https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481' target='_blank'><i className="fa-solid fa-check-double"></i>&nbsp;Check-In</Link>
          </div>
        </div>
    </nav>
    <nav id='mobile'>
        <Link to='/' className='home-link'>GENSHIN&nbsp;<i className="fa-brands fa-meta"></i>&nbsp;BUILD</Link>
        <input type="checkbox" id="mobile-button" />
        <label htmlFor="mobile-button" onClick={Mobile}>
          <i id='open-menu' className="fa-solid fa-bars"></i>
          <i id='close-menu' className="fa-solid fa-x"></i>
        </label>
    </nav>
    <div id='mobile-counter'>
      <div id='mobile-links'></div>
    </div>
    </header>
}

export default Header