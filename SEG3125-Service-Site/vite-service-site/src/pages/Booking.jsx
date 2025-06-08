import Calendar from 'react-calendar';
import {useNavigate} from 'react-router-dom';
import '../styles/calendar.css';
import '../styles/form.css';


function Booking() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/booking-success');
  };

  return (
    <main>
      <h1>Book your appointment</h1>
      <form className='booking-form needs-validation' action="/booking-success" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Full Name <super>*</super></label>
          <input id='name' type='text' placeholder="Enter Your Full Name" className='form-control' required/>
        </div>
        <div>
          <label htmlFor='phone-number'>Phone Number <super>*</super></label>
          <input id='phone-number' type='text' placeholder="Enter Your Phone Number" className='form-control' required/>
        </div>
        <div>
          <label htmlFor='email'>Email <super>*</super></label>
          <input id='email' type='text' placeholder="Enter Your Email" className='form-control' required/>
        </div>
        <div>
          <label htmlFor='service'>Select Service <super>*</super></label>
          <select id='service' type='' placeholder="Choose" className='form-control' required defaultValue=''>
            <option disabled value=''>Choose</option>
            <option value='initial_exam'>Initial Exam</option>
            <option value='dental_cleaning'>Dental Cleaning</option>
            <option value='teeth_removal'>Teeth Removal</option>
            <option value="root_canal">Root Canal</option>
          </select>
        </div>
        <div> 
          <label htmlFor='react-calendar'>Select Date <super>*</super></label>
          <Calendar minDate={new Date()} className='calendar-button form-control'/>
        </div>
        <div>
          <input type='submit' className='submit'/>
        </div>
      </form>
    </main>
  );
}

export default Booking;