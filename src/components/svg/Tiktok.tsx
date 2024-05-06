import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function Tiktok() {
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
                <g clipPath="url(#clip0_1_190)">
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
                        d="M43.023 22.154a8.184 8.184 0 01-6.388-7.201v-.746H30.79V37.37a4.897 4.897 0 01-8.811 2.948 4.897 4.897 0 013.914-7.862 4.964 4.964 0 011.49.22v-5.93a11.589 11.589 0 00-1.694-.085 10.725 10.725 0 00-7.387 18.215 10.743 10.743 0 0018.401-7.506V25.51a13.827 13.827 0 008.083 2.575v-5.76a8.215 8.215 0 01-1.695-.17h-.068z"
                    ></path>
                </g>
                <defs>
                    <clipPath id="clip0_1_190">
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

export default Tiktok;