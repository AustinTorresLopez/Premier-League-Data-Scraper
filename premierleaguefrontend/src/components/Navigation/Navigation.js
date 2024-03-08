import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <u1>
                <li><Link to="/players">Players</Link></li>
                <li><Link to="/teams">Teams</Link></li>
            </u1>
        </nav>

    );
};

export default Navigation;