import React, {useState} from 'react';
import cer from '../../lib/cer.json'

const SearchInput = ({action, useRef}) => {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setList(cer.filter(item => item.cer.includes(e.target.value)));
        setValue(e.target.value);
    }

    const handleValue = (e) => {
        setValue(e.target.textContent);
        setList([]);
        action(e.target.dataset.descrption);
    }

    return (
        <div className="relative">
            <label htmlFor={'waste'} className="block mb-2 text-base font-medium text-gray-900">CER</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search"
                       ref={useRef}
                       onChange={handleChange}
                       name='waste'
                       value={value}
                       className="block w-full py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary  "
                       placeholder="Search" required/>
            </div>
            {
                list.length > 0 && (
                    <div>
                        <ul className={'absolute px-3 bg-white w-full z-50 overflow-visible col-span-5 border rounded shadow top-20 divide-y'}>
                            {list.map((item, index) => (
                                <li key={index}
                                    className="cursor-pointer flex items-center justify-center text-sm w-full py-2.5"
                                    onClick={handleValue}
                                    data-descrption={item.description}>
                                    {item.cer}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>

    );
};

export default SearchInput;