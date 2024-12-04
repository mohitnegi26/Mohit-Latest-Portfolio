import '../App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
function Main() {
        return (
                <>
                        <div className='headdddd sticky-top'>
                                <div className='header1 '>
                                        <Header />
                                </div>
                        </div>

                        <div className='backgroundcolorr'>
                                <div className='container-fluid'>
                                        <div className='row'>
                                                <div className='col-md-2 col-sm-2 col-12'></div>
                                                <div className='col-md-8 col-sm-8 col-12'>
                                                        <div className='namastegif text-center mt-5'>
                                                                <img src="/assets/image/namastey.webp" alt="css" />
                                                        </div>
                                                </div>
                                                <div className='col-md-8 col-sm-8 col-12'>
                                                        <div className='myname text-right mt-5 mb-5'>
                                                                <h1>𝐻𝑒𝓎 !! <span className='mohitnegi'>𝑀☯𝒽𝒾𝓉 𝒩𝑒𝑔𝒾</span> 𝓉𝒽𝒾𝓈 𝓈𝒾𝒹𝑒.</h1>
                                                        </div>
                                                </div>
                                                <div className='col-md-2 col-sm-2 col-12'></div>
                                        </div>
                                        <div className='row'>
                                                <div className='col-lg-12 col-md-12 col-12 mb-5'>
                                                        <Footer />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>

        );
}

export default Main;