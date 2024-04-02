import React from 'react'
import { About, Footer, Skills, Work, Testimonial, Header} from "./container/containerExports";
import Navbar from "./components/Navbar/Navbar"
import "./App.scss"
import "./index.css"


function App() {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            {/* <Skills /> */}
            <Testimonial />
            <Footer />
        </div>
    )
}

export default App