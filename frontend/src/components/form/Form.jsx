import React from 'react';

const Form = ({children, onSubmit, variants}) => {
    return (
        <form className={` border border-gray-200 bg-white px-2 py-4 rounded-md shadow-sm max-w-screen-xl  ${variants ? variants : ''}`} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;
