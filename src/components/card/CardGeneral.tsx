
interface CardGeneralProps {
    imageUrl: string;
    title: string;
    description: string;
    buttonText: string;
}

const CardGeneral: React.FC<CardGeneralProps> = ({ imageUrl, title, description, buttonText }) => {
    return (
        <div className="h-[500px] min-w-[328px] relative">
            <img
                src={imageUrl}
                alt=""
                className="relative rounded-2xl object-cover w-full h-full"
            />
            <div className="absolute bottom-[21px] left-0 right-0 grid gap-[16px] items-center justify-center text-center  ">
                <div className="">
                    <h1 className="text-[35px] font-bold font-[Cinzel] text-[#D5E11D]">
                        {title}
                    </h1>
                    <p className="text-white font-normal font-[Roboto Flex] text-[15px] text-center">
                        {description}
                    </p>
                </div>
                <button
                    className="max-w-[146px] h-[48px] rounded-[16px] mx-auto px-[28px]
                    bg-[#1A4D3E] text-[#D5E11D] border-2 border-[#D5E11D]">
                    {buttonText}
                </button>
            </div>

        </div>
    );
}

export default CardGeneral;
