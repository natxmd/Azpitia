

const Navbar = () => {
    return (
        <header
            className='fixed top-0 flex items-center justify-center w-full shadow-md
            h-[50px] sm:h-[88px] lg:h-[100px]  bg-white z-50'>
            <nav className='containerNav flex items-center justify-between'>
                <img
                    alt="Logo Footer"
                    src="/icons/logoHeader.svg"
                    className="mx-auto"
                />
            </nav>
        </header>
    )
}

export default Navbar