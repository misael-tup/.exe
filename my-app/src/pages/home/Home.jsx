import React, { useEffect } from "react";
import Carousel from "../../components/carousel/Carousel";
import "../../styles/home.css";
import audioFile from "../../audio/audio.mp3"; // Importa el archivo de audio

export default function Home() {
    useEffect(() => {
        const audio = new Audio(audioFile); // Utiliza la variable que contiene la referencia al archivo de audio

        const playAudio = () => {
            audio.play();
            document.removeEventListener("click", playAudio);
        };

        document.addEventListener("click", playAudio);

        return () => {
            audio.pause();
            audio.currentTime = 0;
            document.removeEventListener("click", playAudio);
        };
    }, []);

    return (
        <>
            <Carousel />
        </>
    );
}
