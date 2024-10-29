import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css';
import Main from './Portfolio/Main';
import Header1 from './Portfolio/Component/Header1';
import ContactUs from './Portfolio/ContactUs';
import About from './Portfolio/About';
import Experience from './Portfolio/Experience'


function App()
{
    const router = createBrowserRouter([
        {
            path: "/Main",
            element: <Main />
        },
        {
          path: "/Header1",
          element: <Header1 />
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
            path: "/",
            element: <Experience />
        },
        

]);
return (
    <RouterProvider router={router} />
);
}

export default App;
