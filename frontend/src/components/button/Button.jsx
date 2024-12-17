import React from 'react';

const Button = ({children, onClick}) => {
    return (
        <button type="button"
                onClick={onClick}
                className="flex justify-center items-center w-full md:w-fit h-fit text-white bg-primary focus:ring-4 hover:bg-primary-hover focus:ring-primary font-medium rounded-lg text-base px-5 py-3 focus:outline-none ">
            {children}
        </button>
    );
};

export default Button;