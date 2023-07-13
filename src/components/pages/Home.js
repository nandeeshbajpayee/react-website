
import React from 'react'
import Slider from '../inc/Slider'
import { Link } from 'react-router-dom'
import VMC from '../inc/vmc'
import Service1 from '../images/ping3.jpg'
import Service2 from '../images/ping1.jpg'

function Home() {
    return (
        <>
            <Slider />
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>Our company</h3>
                            <div className='underline mx-auto'></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum risus non pharetra consequat. Suspendisse aliquet finibus est id tempor. Nulla tincidunt, mauris at finibus fringilla, odio nunc pulvinar nisl, nec fermentum metus odio id dui. Nulla dapibus ex in turpis venenatis vestibulum. Vivamus in nibh ac purus eleifend gravida eu et odio. Maecenas sit amet urna vitae risus cursus pretium. Sed efficitur ligula ac diam gravida, non efficitur erat bibendum.</p>
                            <Link to="/about" className='btn btn-warning shadow'>Read more</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/*vision mission and values*/}
            <VMC />
            {/*services*/}
            <section className='section border-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Our Services</h3>
                            <div className='underline mx-auto'></div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow'>
                                <img src={Service1} className='w-100 border-bottom' alt='services' />
                                <div className='card-body'>
                                    <h6>Services 1</h6>
                                    <div className='underline'></div>
                                    <p>As night fell, the stars emerged one by one, dotting the velvet sky. The moon shone brightly, casting a soft glow over the slumbering world below. </p>
                                    <Link to="/services" className='btn btn-link'>read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow'>
                                <img src={Service2} className='w-100 border-bottom' alt='services' />
                                <div className='card-body'>
                                    <h6>Services 2</h6>
                                    <div className='underline'></div>
                                    <p>Randomness danced through the tapestry of life, weaving unexpected moments and surprising encounters.</p>
                                    <Link to="/services" className='btn btn-link'>read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Home
