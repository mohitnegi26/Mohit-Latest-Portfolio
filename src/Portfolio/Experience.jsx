import '../App.css';
import Header from './Component/Header';
// import { NavLink } from 'react-router-dom';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import Footer from './Component/Footer';
function Service() {
        const options = {
                loop: true,
                margin: 3,
                nav: true,
                autoplay: true,
                autoplayTimeout: 3000, // Adjust as needed for autoplay speed
                responsive: {
                        0: { items: 1 },
                        600: { items: 3 },
                        //   1000: { items: 5 },
                },
        };
        return (
                <>
                        <div className='headdddd sticky-top'>
                                <div className='header1'>
                                        <Header />
                                </div>
                        </div>

                        <div className='backgroundcolorr'>
                                <div className='container-fluid'>
                                        <div className='row'>
                                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                        <div className='experience text-center mt-5'>
                                                                <p className='headingbolddd'>EXPERIENCE</p>
                                                                <hr></hr><p className='look'>INVOLVEMENT</p>
                                                        </div>
                                                </div>
                                        </div>


                                        <div className='row'>
                                                <div className='col-lg-4 col-md-4 col-sm-4 col-12'></div>
                                                <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                                                        <div className='expereincebox mb-5'>
                                                                <div className='row'>
                                                                        <div className='col-md-12 col-sm-12 col-12'>
                                                                                <div className='position text-left'>
                                                                                        <h4>Front End Developer</h4>
                                                                                </div>
                                                                                <div className='companyname mt-2'>
                                                                                        <h5>Dhanrashi Fintech Pvt Ltd</h5>
                                                                                </div>
                                                                                <div className='year mt-3 text-right'>
                                                                                        <p>April  <span className='joingingyear'>2024</span>  to Current</p>
                                                                                </div>
                                                                                <div className='myworkhere text-justify'>
                                                                                        <p>I create the user interface (UI) for the fintech loan portals. This involves using HTML, CSS, JavaScript, and frameworks like React.js to develop an engaging and user-friendly interface. My role ensures that the portal is visually appealing and easy to navigate.</p>
                                                                                        <p>I handle the integration of APIs into the portal. This process involves connecting the front-end with back-end services to enable functionalities such as fetching and displaying loan data, submitting loan applications, and handling user authentication. Working with Restful APIs is a crucial part of this task</p>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className='col-lg-4 col-md-4 col-sm-4 col-12'></div>
                                        </div>

                                        <div className='row'>
                                                <div className='col-md-12 col-sm-12 col-12'>
                                                        <div className='skillslogoheading text-center mt-5 mb-5'>
                                                                <h4><u>These are the Companies to whom I provided the Services</u></h4>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="row">
                                                <div className="col-md-12 col-sm-12 col-12 mb-3">
                                                        <OwlCarousel className="owl-theme" {...options}>
                                                                <div className="OwlCarousellogo">
                                                                        <img src="/assets/image/peday.png" alt="peday" />
                                                                </div>
                                                                <div className="OwlCarousellogo">
                                                                        <img src="/assets/image/salora.png" alt="salora" />
                                                                </div>
                                                                <div className="OwlCarousellogo">
                                                                        <img src="/assets/image/dhanrashi.png" alt="dhanrashi" />
                                                                </div>
                                                        </OwlCarousel>
                                                </div>
                                        </div>
                                        <div className='row'>
                                                <div className='col-lg-12 col-md-12 col-12'>
                                                        <Footer />
                                                </div>
                                        </div>

                                </div>
                        </div>
                </>

        );
}

export default Service;