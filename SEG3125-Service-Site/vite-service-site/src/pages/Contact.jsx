import {useNavigate} from 'react-router-dom';
import '../styles/form.css';
import '../styles/calendar.css';
import '../styles/App.css';

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/booking-success');
  };
  return (
    <>
      <div className='banner'></div>
      <main className='row mt-5 contact-section'>
        <div className='col-12 col-md-6 mb-4'>
          <h1>Contact Us</h1>
          <p style={{ lineHeight: '1.8', fontSize: '13pt' }}>
            A beautiful smile starts with a healthy mouth. A great dental experience starts at Starlight Dental Clinic.     
            Our dental team is dedicated to providing you with the exceptional service and quality dental care you deserve. 
            Our patients benefit from our comprehensive dental services, modern technology, and appreciate our patient-centered approach. 
            We are your partner in optimal oral health, and together, we’ll achieve your smile goals.
          </p>

          <p>Tel: <a href="tel:6131234567" className='text-primary'>+1 (613)-123 4567</a></p>
        </div>

        <div className='col-12 col-md-6'>
          <form className='booking-form needs-validation' action="/booking-success" method="post" onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='name'>Full Name <super>*</super></label>
              <input id='name' type='text' placeholder="Enter Your Full Name" className='form-control' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='phone-number'>Phone Number <super>*</super></label>
              <input id='phone-number' type='text' placeholder="Enter Your Phone Number" className='form-control' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='email'>Email <super>*</super></label>
              <input id='email' type='text' placeholder="Enter Your Email" className='form-control' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='additional-info'>Any Additional Information</label>
              <textarea id='additional-info' className='form-control' />
            </div>
            <div className='mb-3'>
              <label>Preferred Method of Contact <super>*</super></label>
              <select id='contact-method' className='form-control' required defaultValue=''>
                <option disabled value=''>Choose</option>
                <option value='email'>Email</option>
                <option value='phone'>Phone</option>
              </select>
            </div>
            <div>
              <input type='submit' className='submit btn btn-primary' />
            </div>
          </form>
        </div>
      </main>

    </>
  );
}

export default Contact;