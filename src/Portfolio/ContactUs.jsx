import React from 'react';
import '../App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
function ContactUs() {
  return (
    <>
      <div className="headdddd sticky-top">
        <div className="header1">
          <Header />
        </div>
      </div>
      {/* <div className='backgroundcolorr'> */}
      <div className="container-fluid backgroundcolorr">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="contactheading mt-5 text-center">
              <span>GET IN TOUCH</span>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="contactheading1 text-center">
              <hr />
              <span className="cont">CONTACT ME</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="howicanhelp  text-center mb-3">
                <span>HOW I CAN HELP YOU?</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="contactdetails">
                  <input
                    type="text"
                    name="yourname"
                    id="yourname"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="contactdetails mt-4 ">
                  <input
                    type="email"
                    name="youremail"
                    id="youremail"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="contactdetails mt-4">
                  <input
                    type="text"
                    name="subjectt"
                    id="subjectt"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="contactdetails mt-4">
                  <textarea
                    name="messagee"
                    id="messagee"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="contactsubmitttt text-center mt-4 mb-5">
                  <button name="submit" id="submit" className='submitbutton'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-lg-6 col-md-6">
            <div className="myaddress">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27858.716937264504!2d79.49755985498568!3d29.21356342990783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addbd0c86d1%3A0x6793e360cb3d930f!2sHaldwani%2C%20Uttarakhand%20263139!5e0!3m2!1sen!2sin!4v1721911301746!5m2!1sen!2sin"
                style={{ width: '100%', height: '422px' }}
              />
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="col-lg-4 col-md-4">
            <div className="mycontactinfophone mt-5 mb-5 text-center">
              <p className="headingbold">Phone</p>
              <p>+91 8791839118</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="mycontactinfoemail mt-5 mb-5 text-center">
              <p className="headingbold">Email</p>
              <p>Mohitnegi26dec2002@gmail.com</p>
              <p>Negimohit0369@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="mycontactinfoaddress mt-5 mb-5 text-center">
              <p className="headingbold">Address</p>
              <p>Haldwani, Uttarakhand</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-12'>
            <Footer />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default ContactUs;
