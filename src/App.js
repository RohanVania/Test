import React from 'react'
import { About, Footer, Work, Skills, Testimonial, Header } from "./container/containerExports";
import { Navbar } from "./components/componentsImports"
import "./App.scss"
import "./index.css"

function App() {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default App