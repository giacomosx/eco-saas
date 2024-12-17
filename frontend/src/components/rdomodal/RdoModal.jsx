import { Modal } from "flowbite-react";
import {useDispatch, useSelector} from "react-redux";
import {isModalOpen, setModalOpen} from "../../redux/modalSlice";
import RdoForm from "../rdoform/RdoForm";
import React from "react";

const customTheme = {
    "root": {
        "show": {
            "on": "flex bg-gray-900 bg-opacity-50",
        },
    },
    "content": {
        "inner": "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow"
    },
    "body": {
        "base": "flex-1 overflow-auto p-6",
        "popup": "pt-0"
    },
    "header": {
        "base": "w-full flex rounded-t border-b p-6",
        "popup": "border-b-0 pb-6",
        "title": "text-xl font-medium text-gray-900",
        "close": {
            "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
            "icon": "h-5 w-5"
        }
    }
}

export function RdoModal() {
    const openModal = useSelector(isModalOpen);
    const dispatch = useDispatch();

    return (
        <>
            <Modal show={openModal} size="3xl" popup onClose={() => dispatch(setModalOpen(!openModal))} theme={customTheme}>
                <Modal.Header>
                    Aggiungi una nuova richiesta
                </Modal.Header>
                <Modal.Body>
                    <RdoForm/>
                </Modal.Body>
            </Modal>
        </>
    );
}
