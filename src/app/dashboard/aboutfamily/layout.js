import React from 'react';

const Layout = ({children,title}) => {
    return (
        <div>
        <title>{title || "عن العائلة"}</title>


            {children}
        </div>
    );
}

export default Layout;
