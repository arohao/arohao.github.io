import '../styles/App.css';
import {Link} from 'react-router-dom';

function Services(){
    return(
        <main>
            <div>
                <h2>Our Services</h2>
                <p>We offer a full range of dental services to support your oral health. From preventive care 
                    to routine cleanings, our team delivers expert care in a friendly, comfortable environment.
                </p>
            </div>
                
            <h4 className='service-header'>General Dentistry</h4>

            <div className='services-group'>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Teeth Cleaning</h5>
                        <p class="card-text">This prodecure gently removes plaque, tartar, and surface stains that daily brushing and flossing can’t 
                                            reach. We also polish your teeth for a fresh, smooth feel and provide personalized tips to improve your 
                                            at-home oral care routine.</p>
                        <Link to='/contact' onClick={() => { window.scroll(0, 0); }}>
                            <button type="button" class="btn btn-primary">Learn More</button>
                        </Link>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Dental X-Rays</h5>
                        <p class="card-text">This procedure is a valuable tool that allow us to see what’s happening beneath the surface of your teeth and gums. 
                                            These detailed images help us to detect issues like cavities, infections, bone loss, impacted teeth, and 
                                            more.</p>
                        <Link to='/contact' onClick={() => { window.scroll(0, 0); }}>
                            <button type="button" class="btn btn-primary">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>

            <h4 className='service-header'>Preventative Dentistry</h4>

            <div className='services-group'>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Teeth Removal</h5>
                        <p class="card-text">This prodecure involves the removal of a tooth or multiple teeth for the protection of your
                                            overall oral health. Whether due to severe decay, infection, crowding, or damage beyond repair, 
                                            our experienced dental team performs extractions with gentle care and precision.</p>
                        <Link to='/contact' onClick={() => { window.scroll(0, 0); }}>
                            <button type="button" class="btn btn-primary">Learn More</button>
                        </Link>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Root Canal</h5>
                        <p class="card-text">This procedure is a highly effective procedure used to save a tooth that is badly decayed or 
                                            infected. When the inner pulp of the tooth becomes inflamed or damaged, a root canal can relieve 
                                            pain, eliminate infection, and preserve your natural tooth.</p>
                        <Link to='/contact' onClick={() => { window.scroll(0, 0); }}>
                            <button type="button" class="btn btn-primary">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>

            <h4 className='service-header'>Cosmetic Dentistry</h4>

            <div className='services-group'>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Teeth Whitening</h5>
                        <p class="card-text">This prodecure is a safe way to brighten your smile and boost your confidence. 
                                            Over time, teeth can become discolored due to factors like aging, coffee, or tobacco use. 
                                            Professional whitening helps lift these stains and restore a cleaner appearance to your teeth.</p>
                        <Link to='/contact' onClick={() => { window.scroll(0, 0); }}>
                            <button type="button" class="btn btn-primary">Learn More</button>
                        </Link>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Crowns</h5>
                        <p class="card-text">This procedure involves molding a custom tooth cap and placing it on a weakened or damaged tooth to 
                                            protect it. This is called a "Crown", and it's used to restore the shape, strength, and appearance of 
                                            a tooth after injury, decay, or procedures like root canals.</p>
                        <Link to='/contact' onClick={() => { window.scroll(0, 0); }}>
                            <button type="button" class="btn btn-primary">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>


        </main>
    )

}

export default Services;