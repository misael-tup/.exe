import React, { useEffect, useRef, useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import "../../styles/home.css";
import audioFile from "../../audio/audio2.mp3";

export default function Home() {
    const audioRef = useRef(null);
    const [showCarousel, setShowCarousel] = useState(false);
    const [showButton, setShowButton] = useState(true); // Nueva propiedad de estado
    const numberOfRepeats = 3;
    let repeatCount = 0;

    useEffect(() => {
        const audio = new Audio(audioFile);
        audioRef.current = audio;

        const playAudio = () => {
            audio.play();
        };

        const handleAudioEnd = () => {
            repeatCount += 1;

            if (repeatCount < numberOfRepeats) {
                audio.currentTime = 0;
                audio.play();
            } else {
                document.removeEventListener("click", playAudio);
            }
        };

        audio.addEventListener("ended", handleAudioEnd);

        return () => {
            audio.pause();
            audio.currentTime = 0;
            audio.removeEventListener("ended", handleAudioEnd);
            document.removeEventListener("click", playAudio);
        };
    }, []);

    const handleButtonClick = () => {
        setShowButton(false); // Oculta el botón al hacer clic
        setShowCarousel(true);
        audioRef.current.play();
    };

    return (
        <>
            {showButton && (
                <button className="download-button" onClick={handleButtonClick}>
                    Descargar virus
                </button>
            )}
            {showCarousel && <Carousel />}
        </>
    );
}
