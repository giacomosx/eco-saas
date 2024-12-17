import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../logo/Logo";
import SearchForm from "../searchform/SearchForm";
import Avatar from "../avatar/Avatar";
import UserDropdown from "../userdropdown/UserDropdown";

const MainMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
            <div className="flex flex-wrap justify-between items-center  p-4 gap-y-4">
                <NavLink to={'/'}>
                    <Logo/>
                </NavLink>
                <SearchForm variants={'order-last lg:order-none'}/>
                <div className="flex items-center space-x-6 rtl:space-x-reverse relative">
                    <Avatar onClick={handleMenuOpen}/>
                    <UserDropdown hidden={menuOpen} />
                </div>
            </div>
        </nav>
    )
        ;
}

export default MainMenu;