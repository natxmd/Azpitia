import BtnGO from "../buttons/BtnGo";

interface props {
    imageUrl: string;
    title: string;
    description: string;
    link: string
    style?: string
}

const CardGeneral = ({ imageUrl, title, description, link, style }: props) => {
    return (
        <div className="h-[500px] relative mb-[-40px] rounded-2xl">
            <div
                className={`absolute inset-0 bg-cover bg-[60%] rounded-2xl ${style}`}
                style={{backgroundImage: `url(${imageUrl})`}}
            >
            </div>
            <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
            <div 
                className="absolute  flex flex-col  items-center justify-center text-center
                bottom-[68px] sm:bottom-[55px] left-0 right-0  gap-[16px] sm:gap-[40px]">
                <div className="grid gap-[16px] !cursor-default">
                    <h1>
                        {title}
                    </h1>
                    <p className="text-white font-semibold font-RobotoFlex text-[15px] px-[34px] leading-[19px] 
                        sm:text-[20px] sm:leading-[20px] sm:font-medium sm:px-0
                        lg:text-[30px]">
                        {description}
                    </p>
                </div>
                <BtnGO link={link}/>
            </div>
        </div>

    );
}

export default CardGeneral;
