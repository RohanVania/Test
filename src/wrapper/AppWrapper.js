import React from 'react'
import NavigationDots from '../components/NavigationDots/NavigationDots'
import SocialMedia from '../components/SocialMedia/SocialMedia'

// This is Testing

// Component that return another Component is Called Higher Order Component

const AppWrapper = (Component, idName, classNames,extraclassname,element) => function HOC({element,btnTypes}) {
    return (
        <div id={idName} className={`app__container tw-overflow-hidden    ${classNames}`}>
            <SocialMedia />
            <div className='app__flex app__wrapper  tw-h-fit'>
                <Component  element={element} btn={btnTypes} />
            </div>
            <NavigationDots active={idName} className={extraclassname} />
        </div>
    )
}


export default AppWrapper