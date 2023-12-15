import React from 'react'
import NavigationDots from '../components/NavigationDots/NavigationDots'
import SocialMedia from '../components/SocialMedia/SocialMedia'


// Component that return another Component is Called Higher Order Component

const AppWrapper = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />
            <div className='app__flex app__wrapper '>
                <Component />
            </div>
            <NavigationDots active={idName} />
        </div>
    )
}


export default AppWrapper