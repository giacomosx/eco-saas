import React from 'react';

const TextInput = ({name, htmlFor, placeholder, label, type, onChange, size = 'w-full', defaultValue, value}) => {
    return (
        <div>
            <label htmlFor={htmlFor} className="block mb-2 text-base font-medium text-gray-900">{label}</label>
            <div className="relative">
                <input onChange={onChange}
                       name={name}
                       type={type}
                       defaultValue={defaultValue}
                       value={value}
                       className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm py-3 rounded-lg focus:ring-primary focus:border-primary block p-2.5 outline-primary ${size}`}
                       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder={placeholder} required/>
            </div>
        </div>
    );
};

export default TextInput;
