
interface Props {
    link: string
}

const BtnGO = ({link}: Props) => {
    return (
        <a 
            href={link}
            target="_blank"
            className="flex items-center justify-center bg-DarkGreenA rounded-[16px]
            w-[122px] h-[32px] border-[2px] border-YellowA text-YellowA
            sm:w-[146px] sm:h-[48px] hover:border-LightGreenA hover:text-LightGreenA
            transition-all ease-in-out">
            <p
                className="uppercase
                font-[Jost] font-medium text-[12px] 
                sm:text-[15px] sm:font-bold">
                quiero ir
            </p>
        </a>
    )
}

export default BtnGO