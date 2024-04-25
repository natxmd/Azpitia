import BtnGO from "../buttons/BtnGo";

interface CardGeneralProps {
    imageUrl: string;
    title: string;
    description: string;
}

const CardGeneral: React.FC<CardGeneralProps> = ({ imageUrl, title, description }) => {
    return (
        <div className="h-[500px]  relative">
            <div
                className="absolute inset-0 bg-cover bg-[60%] rounded-2xl"
                style={{backgroundImage: `url(${imageUrl})`}}
            >
            </div>
            <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
            <div 
                className="absolute  flex flex-col  items-center justify-center text-center
                bottom-[21px] left-0 right-0  gap-[16px] sm:gap-[40px]">
                <div className="grid gap-[16px]">
                    <h1 className="text-[35px] font-bold font-[Cinzel] text-YellowA leading-[36px] 
                        sm:text-[38px] sm:leading-[50px]
                        lg:text-[50px]">
                        {title}
                    </h1>
                    <p className="text-white font-semibold font-RobotoFlex text-[15px] px-[34px] leading-[19px] 
                        sm:text-[20px] sm:leading-[20px] sm:font-medium sm:px-0
                        lg:text-[30px]">
                        {description}
                    </p>
                </div>
                <BtnGO />
            </div>
        </div>

    );
}

export default CardGeneral;
