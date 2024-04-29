

const Navbar = () => {
    return (
        <header
            style={{
                boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.13)',
            }}
            className='fixed sm:relative top-0 flex items-center justify-center w-full
            h-[50px] sm:h-[88px] lg:h-[100px] bg-WhiteA z-50'>
            <nav className="w-[90%]">
                <img
                    alt="Logo Footer"
                    src="/icons/logoHeader.svg"
                    className="mx-auto w-[324px] md:w-[540px]"
                />
            </nav>
        </header>
    )
}

export default Navbar