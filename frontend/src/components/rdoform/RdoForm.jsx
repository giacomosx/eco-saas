import Stepper from "../stepper/Stepper";
import TextInput from "../textinput/TextInput";
import PhoneInput from "../phoneinput/PhoneInput";
import Button from "../button/Button";
import Form from "../form/Form";
import React, {useRef, useState} from "react";
import SearchInput from "../searchinput/SearchInput";
import {HiPlus} from "react-icons/hi";
import {setupListeners} from "@reduxjs/toolkit/query";

const RdoForm = () => {
    const [index, setIndex] = useState(1);
    const [currentWaste, setCurrentWaste] = useState({});
    const [wasteList, setWasteList] = useState([]);
    const [description, setDescription] = useState("");
    const cerInput = useRef(null);

    const handleWaste = (e) => {
        setCurrentWaste({
            ...currentWaste,
            description: description,
            cer: cerInput.current?.value,
            [e.target.name]: e.target.value
        });
    }

    const addWasteToList = () => {
        setWasteList([...wasteList, currentWaste]);
        setCurrentWaste({});
    }

    const handleNextStep = () => {
        setIndex(index + 1);
    }

    const handlePrevStep = () => {
        setIndex(index - 1);
    }

    return (
        <Form>
            <Stepper className={'col-span-2 mb-8 justify-around '} index={index}/>
            <div
                className={`${index === 1 ? 'flex flex-col md:grid grid-cols-2 mt-8 gap-4 2xl:grid-cols-3' : 'hidden'}`}>
                <TextInput label={'Cliente/Fornitore'} placeholder={'Es. Acme Spa'}/>
                <TextInput label={'Cantiere/Deposito'} placeholder={"Es. Cagliari"}/>
                <TextInput label={'Referente'} placeholder={'Es. Giovanni Rossi'}/>
                <TextInput label={'Mail referente'} placeholder={'Es. giovanni.rossi@example.com'} type='mail'/>
                <PhoneInput/>
                <div className={'flex justify-end items-end '}>
                    <Button onClick={handleNextStep}>Avanti</Button>
                </div>
            </div>
            <div
                className={`${index === 2 ? 'flex flex-col md:grid grid-cols-5 mt-8 gap-4 overflow-y-scroll' : 'hidden'}`}>
                <SearchInput action={setDescription} useRef={cerInput}/>
                <TextInput label={'Descrizione'} name={'description'} placeholder={'Es. Ferro '} type='text' onChange={handleWaste} value={description}/>
                <TextInput label={'Quantità'} name={'qty'} placeholder={'Es. 100'} type='number' onChange={handleWaste} />
                <TextInput label={'Condizionamento'} name={'condizionamento'} placeholder={'Es. Big-Bags'} onChange={handleWaste} />
                <div className={'flex justify-center items-center pt-8'}>
                    <Button onClick={addWasteToList} >
                        <HiPlus/>
                    </Button>
                </div>
                {
                    wasteList.length > 0 && (
                        <div className={'mt-4 col-span-5'}>
                            <h4 className={'text-lg text-gray-900 font-medium mb-4'}>Elenco:</h4>
                            <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                                {
                                    wasteList.map((item, index) => (
                                        <li className="py-3 sm:pb-4 w-full" key={index}>
                                            <div className="flex items-center space-x-4 rtl:space-x-reverse min-h-8">
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {item.cer}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        {item.description} &nbsp;
                                                        ({item.condizionamento})
                                                    </p>
                                                </div>
                                                <div
                                                    className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {item.qty} Kg
                                                </div>
                                                <div onClick={() => {
                                                    setWasteList(wasteList.filter((element) => element.description !== item.description ));
                                                }}>
                                                    x
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
                <div className={'flex justify-between items-end col-span-5 mt-8'}>
                    <Button onClick={handlePrevStep}>Indietro</Button>
                    <Button onClick={handleNextStep}>Avanti</Button>
                </div>
            </div>
        </Form>
    );
};

export default RdoForm;