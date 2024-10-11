import React from 'react'

const withResponsiveLayout = (Component) => {
    return () => {
        const screenSize = getScreenSize();

        return <Component screenSize={screenSize} />;
    }
}

const getScreenSize = () => {
    const width = window.innerWidth;

    if (width < 576) {
        return 'mobile';
    } else if (width >= 576 && width < 992) {
        return 'tablet';
    } else if (width >= 992 && width < 1280) {
        return 'laptop';
    } else {
        return 'desktop';
    };    
};

export default withResponsiveLayout;