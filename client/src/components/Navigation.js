import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div>
            <nav className="navigation">
                <NavLink className="navigation-navlink" to="/">Strona główna</NavLink>
                <NavLink className="navigation-navlink" to="/fashion/men/clothes/tshirts">Bluzki</NavLink>
            </nav>
        </div>
    )
}
