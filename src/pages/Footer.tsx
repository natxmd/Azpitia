
const Footer = () => {
    return (
        <footer className="bg-DarkGreenA">
            <div className="w-[90%] mx-auto">
                <div
                    className="py-[48px]">

                </div>
                <div className="bg-YellowAFooter w-full h-[1px]" />
                <p
                    className="font-[Jost] font-medium
                    text-white text-[14px] text-center
                    pt-[16px] pb-[24px] sm:pt-[24px] sm:pb-[32px]">
                    All rights reserved ©
                    <a
                        target="_blank"
                        href="https://ciclos.studio/"
                        className="transition-all ease-linear 
                        hover:text-YellowAFooter">
                        {" "}Ciclos Studio{" "}
                    </a>
                    2023
                </p>
            </div>
        </footer>
    )
}

export default Footer
