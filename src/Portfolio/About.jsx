import '../App.css';
import Header from './Component/Header';
import { NavLink } from 'react-router-dom';
import Footer from './Component/Footer';
import React from 'react';
function About() {

  return (
    <>
      <div className='headdddd sticky-top'>
        <div className='header1 '>
          <Header />
        </div>
      </div>
      <div className='backgroundcolorr'>
        <div className='container-fluid'>
          <div className='row '>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
              <div className='myimage text-center mt-5'>
                {/* <img src="/assets/image/Mohitimage.jpg" alt="myimage"/> */}
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
              <div className='aboutme text-center mt-5'>
                <p className='headingbolddd' >ABOUT ME</p>
                <hr className='horizontallineeeee'></hr><p className='who'>WHO AM I ?</p>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                <div className='aboutmeparagraph text-justify mt-3'>
                  <p>Hello! I'm Mohit Negi, a passionate Frontend Developer with a strong aspiration to become a Full-Stack Web Developer. Currently, I am working as an Assistant IT Manager at Dhanrashi Fintech Pvt Ltd, where I am deeply involved in the development of our fintech app for loan processing.</p>
                  <p>I have a solid foundation in web development, with key skills in HTML, CSS, Bootstrap, JavaScript, and the React.js framework. Additionally, I have experience in Photoshop, C++, and Java, which enhance my versatility as a developer. Beyond coding, I have a keen interest in traveling and exploring new places, which continually inspires my creativity and problem-solving skills.</p>
                  <p>I graduated with a Bachelor of Computer Applications (BCA) from IP University in 2024 and am currently pursuing a Master of Computer Applications (MCA) from Uttranchal University, balancing my studies with my professional responsibilities.</p>
                  <p>My journey in the tech world is driven by a commitment to continuous learning and a desire to innovate. I am excited about the future and the opportunities that lie ahead as I work towards becoming a proficient Full-Stack Web Developer.</p>
                </div>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                <div className='cvpdff text-right mt-3 mb-5'>
                  <NavLink to="/assets/image/"><button className='text-left'>DOWNLOAD CV</button></NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
              <div className='Education text-center mt-5'>
                <p className='headingbolddd' >EDUCATION</p>
                <hr className='Educationline'></hr><p className='learning'>LEARNING</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-5 col-md-5 col-sm-5 col-12'>
              <div className='row'>
                < div className='educationbox1'>
                  <div className='col-md-12 col-sm-12 col-12'>
                    <div className='educationyear'>
                      <h1><span className='firstyear'>2024</span>-26</h1>
                    </div>
                  </div>
                  <div className='col-md-12 col-sm-12 col-12'>
                    <div className='educationcourse'>
                      <h4>Master's of Computer Application</h4>
                      <h5>Uttaranchal University (UU)</h5>
                    </div>
                  </div>
                </div>
                <div className='educationbox2 mt-5'>
                  <div className='col-md-12 col-sm-12 col-12'>
                    <div className='educationyear'>
                      <h1><span className='firstyear'>2020</span></h1>
                    </div>
                  </div>
                  <div className='col-md-12 col-sm-12 col-12'>
                    <div className='educationcourse'>
                      <h4>Intermediate</h4>
                      <h5>CBSE</h5>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className='col-md-2 col-sm-2 col-12'>
              <div class="vl"></div>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-5 col-12'>
              <div className='row'>
                <div className='educationbox3'>
                  <div className='col-md-12 col-sm-12 col-12'>
                    <div className='educationyear'>
                      <h1><span className='firstyear'>2021</span>-24</h1>
                    </div>
                  </div>
                  <div className='col-md-12 col-sm-12 col-12'>
                    <div className='educationcourse'>
                      <h4>Bachelor's of Computer Application</h4>
                      <h5>Guru Gobind Singh Indraprastha University (IPU)</h5>
                    </div>
                  </div>
                </div>
                <div className='educationbox4'>
                  <div className='col-md-12 col-sm-12 col-12'>
                    <div className='educationyear'>
                      <h1><span className='firstyear'>2018</span></h1>
                    </div>
                  </div>
                  <div className='col-md-12 col-sm-12 col-12'>
                    <div className='educationcourse'>
                      <h4>High School</h4>
                      <h5>CBSE</h5>
                    </div>
                  </div>
                </div>
              </div>
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

export default About;