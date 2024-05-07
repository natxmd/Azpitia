import BtnFooter from "../components/buttons/BtnFooter"
import Facebook from "../components/svg/Facebook"
import Instagram from "../components/svg/Instagram"
import Tiktok from "../components/svg/Tiktok"

const Footer = () => {
    return (
        <footer className="bg-DarkGreenA">
            <div className="mx-auto w-[90%] max-w-[1184px] xl:w-full">
                <div 
                    className="py-[48px] grid justify-items-center items-center place-content-center
                    gap-[32px]
                    lg:flex lg:justify-between">
                    <img
                        alt="Logo Footer"
                        src="/icons/logoFooter.svg"
                        className="w-[118px] sm:w-[125px] lg:w-[154px]"
                    />
                    <div
                        className="grid gap-[14px] sm:gap-[20px] sm:flex">
                        <BtnFooter
                            text="CASA MURAL"
                            link="https://es-l.airbnb.com/rooms/40180449?guests=1&adults=1&s=67&unique_share_id=7b9d7992-7631-422c-98d8-c14496223de4"
                        />
                        <BtnFooter
                            text="CASA SANTORINI"
                            link="https://es-l.airbnb.com/rooms/558908938968796650?guests=1&adults=1&s=67&unique_share_id=587fdc0f-985d-40ae-9e91-6b72dc30a5b2"
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
