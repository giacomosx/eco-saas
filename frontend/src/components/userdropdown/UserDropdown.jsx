import React from 'react';
import {Link} from "react-router-dom";

const UserDropdown = ({hidden}) => {
    return (
        <div className={`${hidden === true ? 'visible' : 'hidden' } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute left-0 top-0 translate-y-10 -translate-x-full `}>
            <div className="px-4 py-3 text-sm text-gray-900 ">
                <div>Giacomo Bartoli</div>
                <div className="font-medium truncate">giacomo.bartoli@me.com</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 " aria-labelledby="avatarButton">
                <li>
                    <Link to={'/impostazioni'}
                          className="block px-4 py-2 hover:bg-gray-100 ">Impostazioni</Link>
                </li>
            </ul>
            <div className="py-1">
                <Link to={'/'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Logout</Link>
            </div>
        </div>
    );
};

export default UserDropdown;
