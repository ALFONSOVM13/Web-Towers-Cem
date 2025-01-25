import React from 'react'
import { MdClose } from 'react-icons/md'

export const ModalHeader = ({ title,  onClose}) => {
    return (
        <header className="flex items-center justify-between w-full mb-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <button
                onClick={onClose}
                className="p-1 border rounded hover:bg-gray-100 text-gray-500 hover:text-gray-800"
            >
                <MdClose />
            </button>
        </header>
    )
}
