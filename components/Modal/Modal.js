import React from 'react';

const Modal = ({ isVisible, onClose }) => {
    if (!isVisible) return false;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>

            <div className="flex flex-col max-w-md gap-2 p-6 rounded-md bg-white">
                <h2 className="text-xl font-semibold leading-tight tracking-wide">Quis vel eros donec ac odio tempor.</h2>
                <p className="flex-1 dark:text-gray-400">Aenean sed adipiscing diam donec adipiscing tristique risus. Donec pretium vulputate sapien nec sagittis aliquam malesuada.
                    <a href="#" rel="noopener noreferrer" className="font-semibold dark:text-violet-400">Learn more</a>
                </p>
                <div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
                    <button onClick={() => onClose()} className="px-6 py-2 rounded-sm">Cancel</button>
                    <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-400 dark:text-gray-900">Agree</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;