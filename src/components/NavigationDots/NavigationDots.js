
import React from 'react'

const NavigationDots = ({ active, className }) => {
    return (
        <div className={`app__navigation ${className}`}>
            {['Home', 'About', 'Work', 'Projects', 'Testimonial', 'Contact'].map((item, indx) => (
                <a href={`#${item}`}
                    key={item + indx}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                >
                </a>
            ))}
        </div>
    )
}

export default NavigationDots