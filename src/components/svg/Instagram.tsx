import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function Instagram() {
    const [hover, setHover] = useState(false)
    const isMd = useMediaQuery({ maxWidth: "768px" });
    return (
        <a target="_blank" href="">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={isMd ? "42" : "60"}
                height={isMd ? "42" : "60"}
                fill="none"
                viewBox="0 0 61 62"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <g clipPath="url(#clip0_1_184)">
                    <path
                        style={{
                            fill: hover ? "#C1F0A4" : "#BEC91B", 
                            transition: "all 0.3s ease-in-out"
                        }}
                        fill="#BEC91B"
                        d="M30.5 61.652c16.844 0 30.5-13.655 30.5-30.5C61 14.308 47.343.652 30.5.652 13.655.653 0 14.309 0 31.153c0 16.845 13.655 30.5 30.5 30.5z"
                    ></path>
                    <path
                        fill="#1A4D3E"
                        d="M37.535 14.207H23.73c-5.61 0-10.174 4.564-10.174 10.174v13.805c0 5.61 4.564 10.175 10.174 10.175h13.805c5.61 0 10.175-4.564 10.175-10.175V24.381c0-5.61-4.565-10.174-10.175-10.174zm6.739 23.98a6.739 6.739 0 01-6.739 6.738H23.73a6.739 6.739 0 01-6.738-6.739V24.382a6.739 6.739 0 016.738-6.74h13.805a6.739 6.739 0 016.739 6.74v13.804z"
                    ></path>
                    <path
                        fill="#1A4D3E"
                        d="M30.631 22.45c-4.87 0-8.833 3.962-8.833 8.833 0 4.87 3.963 8.833 8.833 8.833 4.871 0 8.834-3.962 8.834-8.833 0-4.87-3.963-8.834-8.834-8.834zm0 14.23a5.397 5.397 0 110-10.795 5.397 5.397 0 010 10.795zM41.596 22.517a2.117 2.117 0 11-4.234 0 2.117 2.117 0 014.234 0z"
                    ></path>
                </g>
                <defs>
                    <clipPath id="clip0_1_184">
                        <path
                            fill="#fff"
                            d="M0 0H61V61H0z"
                            transform="translate(0 .652)"
                        ></path>
                    </clipPath>
                </defs>
            </svg>
        </a>
    );
}

export default Instagram;