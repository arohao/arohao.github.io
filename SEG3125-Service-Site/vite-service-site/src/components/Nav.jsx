import { Link } from 'react-router-dom';
import '../styles/components.css';
import logo from '../assets/logo.png';

function Nav() {
  return (
    <nav className='d-flex justify-content-around align-items-center flex-wrap'>
      <Link className='d-flex gap-3 pe-5' to='/'>
        <img src={logo} className='logo' alt='logo' />
        <h5>Starlight Dental Clinic</h5>
      </Link>
      <div className='d-flex gap-lg-5 gap-md-3 gap-3  align-items-center' >
        <h6><Link to='/'>Home</Link></h6>
        <h6><Link to='/services'>Services</Link></h6>
        <h6><Link to='/about-us'>About Us</Link></h6>
        <h6><Link to='/contact'>Contact</Link></h6>
        <h6>
          <Link to='/booking'>
            <span className='btn btn-primary butt'>Book Appointment</span>
          </Link>
        </h6>
      </div>
    </nav>
  );
}

export default Nav;