
interface props {
    link: string;
    title: string;
}

const CardVideo: React.FC<props> = ({ link, title }) => {

    return (
        <div className='relative'>
            <iframe
                src={link}
                title={title}
                className='w-[650px] h-[400px] rounded-2xl
                lg:w-[930px] lg:h-[524px]'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default CardVideo;

