
interface props {
    link: string;
    title: string;
}

const CardVideo: React.FC<props> = ({ link, title }) => {

    return (
        <iframe
            src={link}
            title={title}
            className='!w-full h-[400px] rounded-2xl
                lg:w-[930px] lg:h-[524px]'
        ></iframe>
    );
};

export default CardVideo;

