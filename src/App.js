import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css';
import Main from './Portfolio/Main';
import Header from './Portfolio/Component/Header';
import Footer from './Portfolio/Component/Footer';
import ContactUs from './Portfolio/ContactUs';
import About from './Portfolio/About';
import Experience from './Portfolio/Experience'
import Skills from './Portfolio/Skills'
import Projects from './Portfolio/Projects';


function App()
{
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />
        },
        {
            path: "/Header",
            element: <Header />
        },
        {
            path: "/Footer",
            element: <Footer />
        },
        {
            path: "/ContactUs",
            element: <ContactUs />
        },
        {
            path: "/About",
            element: <About />
        },
        {
            path: "/Experience",
            element: <Experience />
        },
        {
            path: "/Skills",
            element: <Skills />
        },
        {
            path: "/Projects",
            element: <Projects />
        }
        

]);
return (
    <RouterProvider router={router} />
);
}

export default App;
