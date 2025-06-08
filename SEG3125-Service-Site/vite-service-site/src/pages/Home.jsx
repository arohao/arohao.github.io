import dentalImg from "../assets/dental_logo.jpg"
import {Link} from 'react-router-dom';
import '../styles/App.css';

function Home() {
  return (
    <main>
      <a>
        <img src={dentalImg} className="frontpage-logo" alt="front page logo" />
        <h3 className="image-caption">A Healthy Smile Starts Here</h3>
      </a>

      <h3 className="frontpage-header">New Patients</h3>

      <div>
        <p className="lead">
          Welcome to Startlight Dental! We're excited for you to join the family. We’re dedicated to providing gentle, 
          comprehensive dental care for patients of all ages. Whether you’re here for a routine check-up, cosmetic dentistry, 
          or advanced treatments, our experienced team is here to help you achieve and maintain a healthy, confident smile. </p>
        <p className="lead">
            We combine the latest technology with a caring, personalized approach—because we 
            believe every patient deserves to feel comfortable, informed, and valued.
        </p>
        <p className="lead">
          Let us brighten your smile—book your appointment today!
        </p>

        <Link to='/contact'>
          <button type="button" class="btn btn-outline-primary btn-lg">Contact Us</button>
        </Link>

      </div>

      <h3 className="frontpage-header">Our Services</h3>

      <div className="services-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Teeth Cleaning</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">$150</h6>
            <p class="card-text">This is a routine dental procedure that removes plaque and tartar from the teeth.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Teeth Removal</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">$400 per tooth</h6>
            <p class="card-text">This procedure removes unwanted teeth from the mouth, whether for health or aesthetic reasons.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Root Canal</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">$800 per tooth</h6>
            <p class="card-text">This procedure is performed on a damaged or infected tooth, saving it from extraction.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">X-Rays</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Prices vary</h6>
            <p class="card-text">X-rays can be done to see what you're teeth look like, giving you a better idea of your dental health.</p>
          </div>
        </div>
      </div>
      
      <div className="button_custom">
          <Link to='/services'>
          <button type="button" class="btn btn-outline-primary btn-lg">Learn More</button>
          </Link>
      </div>
      
      
    </main>
  );
}

export default Home;