import { useState } from "react";
import Airbnb from "../svg/Airbnb";

interface Props {
    text: string;
    link: string;
}

const BtnFooter = ({ text, link }: Props) => {
    const [hover, setHover] = useState(false)
    return (
        <a target="_blank" href={link} className="">
            <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`flex items-center justify-center gap-[10px]
                border-[2px] rounded-[16px] px-[22px] mx-auto
                transition-all duration-[0.3s] ease-linear
                h-[32px] sm:h-[52px] lg:h-[74px] sm:rounded-[66px]
                ${hover ? "border-LightGreenA text-LightGreenA" : "border-YellowAFooter text-YellowAFooter"}`}>
                <p
                    className="font-[Jost] text-center font-semibold
                    text-[12px] text-medium sm:text-[16px] sm:text-bold xl:text-[20px]">
                    {text}
                </p>
                <span>
                    <Airbnb hover={hover} />
                </span>
            </button>
        </a>
    )
}

export default BtnFooter
