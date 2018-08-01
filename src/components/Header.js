// header is going to be static markup so we can use functional component (rfc)
import React from 'react';

// another syntax to export component:
export const Header = () => {
    return (
            <div>
                <h1>Contact Manager</h1>
            </div>
    );
}

// export default Header;
