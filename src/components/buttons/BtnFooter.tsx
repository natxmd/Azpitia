interface Props {
    text: string;
    icon: React.ReactNode
    hover: boolean
    setHover: (hover: boolean) => void
}

const BtnFooter = ({ text, icon, hover, setHover }: Props) => {
    return (
        <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex items-center justify-center gap-[10px]
            border-[1px] rounded-[16px] w-full max-w-[454px] mx-auto
            transition-all duration-[0.3s] ease-linear
            h-[32px] sm:h-[52px] lg:h-[74px]
            ${hover ? "border-LightGreenA text-LightGreenA" : "border-YellowAFooter text-YellowAFooter"}`}>
            <p 
                className="font-[Jost] text-center leading-normal
                text-[12px] text-medium sm:text-[20px] sm:text-bold">
                {text}
            </p>
            <span>
                {icon}
            </span>
        </button>
    )
}

export default BtnFooter
