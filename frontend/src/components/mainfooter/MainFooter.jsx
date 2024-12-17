import {Link} from "react-router-dom";

const MainFooter = () => {
    return (
        <footer className="bg-white w-full fixed left-0 bottom-0 border-t border-gray-200">
            <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center ">© 2024
                    <Link to={'/'} className="hover:underline">Eco Saas™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <Link to={'/'} className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to={'/'} className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to={'/'} className="hover:underline me-4 md:me-6">Licensing</Link>
                    </li>
                    <li>
                        <Link to={'/'} className="hover:underline">Contacts</Link>
                    </li>
                </ul>
            </div>
        </footer>

    );
}

export default MainFooter;