import { Link, NavLink } from 'react-router-dom'
import Footer from './Footer'
import './homePage.css'
export default function HomePage()
 {
  return(
<div>
  <div className='container'>
  <ul className='d-flex flex-row mb-3 '>
   <NavLink   className='nav-link' to="/Footer">HomePage</NavLink>
   <Link className='nav-link'  to="/About">About</Link>
   <Link className='nav-link'  to="/Contact">Contact</Link>
   <Link className='nav-link'  to="/Course">Course</Link>
      <Link className='nav-link'  to="/Login">Login</Link>
</ul>

</div>

<div id='carouselStacked' className="carousel slide">
 <div className="d-flex justify-content-between align-items-center">
    <h5 className="mb-0">Top controls</h5>
    <div>
      <button className="btn-icon btn-sm" type="button" data-bs-target="#carouselStacked" data-bs-slide="prev">
        <span className="carousel-icon-prev" aria-hidden="true"></span>
        <span className="">Previous</span>
      </button>
      <button className="btn-icon btn-sm" type="button" data-bs-target="#carouselStacked" data-bs-slide="next">
        <span className="carousel-icon-next" aria-hidden="true"></span>
        <span className="">Next</span>
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

 