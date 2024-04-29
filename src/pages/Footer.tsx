import { useState } from "react"
import BtnFooter from "../components/buttons/BtnFooter"
import Airbnb from "../components/svg/Airbnb"
import Facebook from "../components/svg/Facebook"
import Instagram from "../components/svg/Instagram"
import Tiktok from "../components/svg/Tiktok"
import WhatsApp from "../components/svg/WhatsApp"

const Footer = () => {
    const [hoverWsp, setHoverWsp] = useState(false)
    const [hoverAir, setHoverAir] = useState(false)
    return (
        <footer className="bg-DarkGreenA">
            <div className="mx-auto w-[90%] max-w-[1184px] xl:w-full">
                <div 
                    className="py-[48px] grid justify-items-center items-center place-content-center
                    gap-[20px] 
                    md:gap-[px] md:grid-cols-3">
                    <img
                        alt="Logo Footer"
                        src="/icons/LogoFooter.svg"
                        className="w-[118px] sm:w-[125px] lg:w-[154px]"
                    />
                    <div
                        className="grid gap-[16px] sm:gap-[20px]">
                        <BtnFooter
                            hover={hoverWsp} setHover={setHoverWsp}
                            text="QUIERO HABLAR CON ALGUIEN"
                            icon={<WhatsApp hover={hoverWsp} />}
                        />
                        <BtnFooter
                            hover={hoverAir} setHover={setHoverAir}
                            text="QUIERO SEPARAR POR AIRBNB"
                            icon={<Airbnb hover={hoverAir} />}
                        />
                    </div>
                    <div
                        className="flex justify-items-center items-center justify-center
                        gap-[20px] sm:gap-[30px]">
                        <Facebook />
                        <Instagram />
                        <Tiktok />
                    </div>
                </div>
                <div className="bg-YellowAFooter w-full h-[1px]" />
                <p
                    className="font-[Jost] font-medium select-none
                    text-white text-[14px] text-center
                    pt-[16px] pb-[24px] sm:pt-[24px] sm:pb-[32px]">
                    All rights reserved ©
                    <a
                        target="_blank"
                        href="https://ciclos.studio/"
                        className="transition-all ease-linear !cursor-pointer
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
