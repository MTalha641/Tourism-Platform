import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

export default function Navbar() {
    const [dropDown, setDropDown] = useState(false);

    const showDropDown = () => {
        setDropDown(!dropDown);
    }
    
    const handleSignOut = (e) => {
        e.preventDefault()

        localStorage.clear();
        window.location.reload();
    }

    return (
        <nav className='w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white shadow-2xl'>
            <div className='max-w-[1400px] mx-auto lg:px-3 w-full'>
                <div className='lg:w-full w-11/12 mx-auto h-full flex justify-between items-center'>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex items-center gap-x-2'>
                            <img className='rounded-full ' src="https://flowbite.com/docs/images/logo.svg" alt="" />Travel App
                        </div>
                    </div>
                    <ul className='flex items-center xl:gap-12 gap-x-4 max-lg:hidden'>
                        <a href="/" className='leading-normal no-underline text-black font-bold text-lg hover:text-primary'>Home</a>
                        <a href="/tours" className='leading-normal no-underline text-black font-bold text-lg hover:text-primary'>Tours</a>
                        <a href="/blog" className='leading-normal no-underline text-black font-bold text-lg hover:text-primary'>Blog</a>
                        <a href="/contact" className='leading-normal no-underline text-black font-bold text-lg hover:text-primary'>Contact</a>
                        <a href="/bookedtours" className='leading-normal no-underline text-black font-bold text-lg hover:text-primary'>My Booking</a>
                        <button onClick={handleSignOut} className='bg-primary rounded shadow h-16 px-12 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary'>Sign Out</button>
                    </ul>
                    { dropDown ? (
                        <div onClick={showDropDown} className='lg:hidden text-[22px] cursor-pointer text-black'>
                            <MdClose />
                        </div>
                    ) : (
                        <div onClick={showDropDown} className='lg:hidden text-[22px] cursor-pointer text-black'>
                            <HiMenuAlt3 />
                        </div>
                    )}
                </div>
                { dropDown && (
                    <div className='lg:hidden w-full fixed top-24 bg-primary transition-all'>
                        <div className='w-full flex flex-col items-baseline gap-4'>
                            <ul className='flex flex-col justify-center w-full'>
                                <a href="/" className='px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary hover:bg-lightGray text-[15px] border-0 border-b border-[#fffff1a] border-solid' >Home</a>
                                <a href="/tours" className='px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary hover:bg-lightGray text-[15px] border-0 border-b border-[#fffff1a] border-solid'>Tours</a>
                                <a href="/blog" className='px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary hover:bg-lightGray text-[15px] border-0 border-b border-[#fffff1a] border-solid'>Blog</a>
                                <a href="contact" className='px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary hover:bg-lightGray text-[15px] border-0 border-b border-[#fffff1a] border-solid'>Contact</a>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
