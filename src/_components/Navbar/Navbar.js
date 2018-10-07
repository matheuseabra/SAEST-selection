import React from 'react';
const logoPath = 'http://saest.ufpa.br/portal/images/saest.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">          
                        <h3><img src={ logoPath } /> SIGAEST</h3>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;