import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function Facebook() {
    const [hover, setHover] = useState(false)
    const isMd = useMediaQuery({ maxWidth: "768px" });
    return (
        <a target="_blank" href="https://www.facebook.com/AzpitiaHomes/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={isMd ? "42" : "60"}
                height={isMd ? "42" : "60"}
                fill="none"
                viewBox="0 0 61 62"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <g clipPath="url(#clip0_1_180)">
                    <path
                        style={{
                            fill: hover ? "#C1F0A4" : "#BEC91B", 
                            transition: "all 0.3s ease-in-out"
                        }}
                        fill="#BEC91B"
                        d="M30.5 61.652c16.845 0 30.5-13.655 30.5-30.5C61 14.308 47.345.652 30.5.652S0 14.308 0 31.152c0 16.845 13.655 30.5 30.5 30.5z"
                    ></path>
                    <path
                        fill="#1A4D3E"
                        d="M38.168 32.346h-5.443v19.938H24.48V32.346h-3.922v-7.007h3.922v-4.534c0-3.243 1.54-8.32 8.319-8.32l6.108.025v6.801h-4.432c-.727 0-1.75.364-1.75 1.91v4.124h6.163l-.72 7.001z"
                    ></path>
                </g>
                <defs>
                    <clipPath id="clip0_1_180">
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

export default Facebook;