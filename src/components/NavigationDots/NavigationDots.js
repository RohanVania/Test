
import React from 'react'

const NavigationDots = ({active}) => {
    return (
        <div className='app__navigation'>
            {['Home', 'About', "Work", "Projects", "Testimonials", "Contact"].map((item,indx) => (
                <a href={`#${item}`}
                    key={item+indx}
                    className='app__navigation-dot'
                    style={active===item?{backgroundColor:'#313BAC'}:{}}
                />
            ))}
        </div>
    )
}

export default NavigationDots