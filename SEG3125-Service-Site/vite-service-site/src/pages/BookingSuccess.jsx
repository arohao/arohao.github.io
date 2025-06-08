import {Link} from 'react-router-dom';

function BookingSuccess() {
  return (
    <main className='d-flex flex-column align-items-center'>
    <h1 className='display-1'>Success!</h1>
    <p className='display-6'>We have received your information!</p>
    <Link to='/' style={{paddingTop: '100px', textDecoration: 'underline'}}>Press here to go back to Home</Link>
    </main>
  );
}

export default BookingSuccess;