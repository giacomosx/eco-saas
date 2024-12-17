import React from 'react';

const Stepper = ({className = '', index}) => {
    return (

        <ol className={`items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse ${className}`}>
            <li className={`flex items-center ${index === 1 ? 'text-primary' : 'text-gray-500'} space-x-2.5 rtl:space-x-reverse`}>
                <span className={`flex items-center justify-center w-8 h-8 border ${index === 1 ? 'border-primary' : 'border-gray-500'} rounded-full shrink-0 `}>
                    1
                </span>
                <span>
                    <h3 className="font-medium leading-tight">Informazioni Contatto</h3>
                </span>
            </li>
            <li className={`flex items-center ${index === 2 ? 'text-primary' : 'text-gray-500'}  space-x-2.5 rtl:space-x-reverse`}>
                <span
                    className={`flex items-center justify-center w-8 h-8 border ${index === 2 ? 'border-primary' : 'border-gray-500'} rounded-full shrink-0 `}>
                    2
                </span>
                <span>
                    <h3 className="font-medium leading-tight">Informazioni Rifiuto</h3>
                </span>
            </li>
            <li className={`flex items-center ${index === 3 ? 'text-primary' : 'text-gray-500'}  space-x-2.5 rtl:space-x-reverse`}>
                <span
                    className={`flex items-center justify-center w-8 h-8 border ${index === 3 ? 'border-primary' : 'border-gray-500'} rounded-full shrink-0 `}>
                    3
                </span>
                <span>
                    <h3 className="font-medium leading-tight">Riepilogo</h3>
                </span>
            </li>
        </ol>


    );
};

export default Stepper;