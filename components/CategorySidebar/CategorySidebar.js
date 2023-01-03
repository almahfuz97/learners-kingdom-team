import React from 'react';
import { FaTimes } from 'react-icons/fa';

const CategorySidebar = ({ filterToggle, setFilterToggle, children }) => {

    return (
        <>
            {
                filterToggle ?
                    <div className='block lg:hidden fixed z-30'>
                        <div onClick={() => setFilterToggle((prev) => !prev)} className={`bg-black/90 fixed inset-0 duration-300`}></div>
                        <aside className={`fixed left-0 top-0 z-10 duration-300 bg-white border-2 border-primary_color/30 min-w-[280px] flex-col gap-2 p-4 px-8 h-full overflow-x-scroll`}>
                            <FaTimes onClick={() => setFilterToggle((prev) => !prev)} className="absolute right-4 text-lg text-rose-500 cursor-pointer"></FaTimes>
                            {children}
                        </aside>
                    </div>
                    :
                    <div className='block fixed lg:hidden z-30'>
                        <div onClick={() => setFilterToggle((prev) => !prev)} className={`bg-black/90 fixed inset-0 top-0 duration-300 hidden`}></div>
                        <aside className={`fixed -left-80 top-0 z-10 duration-300 bg-white border-2 border-primary_color/30 min-w-[280px] flex-col gap-2 p-4 px-8 h-full`}>
                            <FaTimes onClick={() => setFilterToggle((prev) => !prev)} className="absolute right-4 text-lg text-rose-500"></FaTimes>
                            {children}
                        </aside>
                    </div>
            }
        </>
    );
};

export default CategorySidebar;