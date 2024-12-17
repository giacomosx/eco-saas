import {Banner} from "flowbite-react";
import {HiPlus} from "react-icons/hi";
import Button from "../button/Button";
import {useSelector, useDispatch} from "react-redux";
import {isModalOpen, setModalOpen} from "../../redux/modalSlice";

export function CtaBanner() {
    const dispatch = useDispatch();
    const modalOpen = useSelector(isModalOpen);

    return (
        <Banner>
            <div
                className="flex w-fit flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm md:flex-row lg:max-w-7xl">
                <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
                    <span className="self-center whitespace-nowrap text-lg font-semibold md:pr-6 border-gray-200 border-r">
                        Nuova richiesta
                    </span>
                    <p className="flex items-center text-sm font-normal text-gray-500 ps-4">
                        Aggiungi una nuova richiesta di offerta.
                    </p>
                </div>
                <div className="flex shrink-0 items-center">
                    <Button onClick={() => dispatch(setModalOpen(!modalOpen))}>
                        <HiPlus className="h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </Banner>
    );
}
