import React from 'react';

const Avatar = ({onClick}) => {
    return (
        <div
            className="cursor-pointer inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-gray-200 hover:border-primary transition-all duration-300">
            <span className="font-medium text-gray-600" onClick={onClick}>GB</span>
        </div>
    );
};

export default Avatar;
