import React, { useState, useEffect } from "react";

import "../../styles/carousel.css";
import img_1 from "../../images/carrousel/1.png"
import img_2 from "../../images/carrousel/2.png"
import img_3 from "../../images/carrousel/3.png"
import img_4 from "../../images/carrousel/4.png"
import img_5 from "../../images/carrousel/5.png"
import img_6 from "../../images/carrousel/6.png"
import img_7 from "../../images/carrousel/7.png"
import img_8 from "../../images/carrousel/8.png"
import img_9 from "../../images/carrousel/9.png"
import img_10 from "../../images/carrousel/10.png"
import img_11 from "../../images/carrousel/11.png"
import img_12 from "../../images/carrousel/12.png"
import img_13 from "../../images/carrousel/13.png"
import img_14 from "../../images/carrousel/14.png"
import img_15 from "../../images/carrousel/15.png"
import img_16 from "../../images/carrousel/16.png"
import img_17 from "../../images/carrousel/17.png"
import img_18 from "../../images/carrousel/18.png"
import img_19 from "../../images/carrousel/19.png"
import img_20 from "../../images/carrousel/20.png"
import img_21 from "../../images/carrousel/21.png"
import img_22 from "../../images/carrousel/22.png"
import img_23 from "../../images/carrousel/23.png"
import img_24 from "../../images/carrousel/24.png"
import img_25 from "../../images/carrousel/25.png"
import img_26 from "../../images/carrousel/26.png"
import img_27 from "../../images/carrousel/27.png"
import img_28 from "../../images/carrousel/28.png"
import img_29 from "../../images/carrousel/29.png"
import img_30 from "../../images/carrousel/30.png"
import img_31 from "../../images/carrousel/31.png"
import img_32 from "../../images/carrousel/32.png"
import img_33 from "../../images/carrousel/33.png"
import img_34 from "../../images/carrousel/34.png"
import img_35 from "../../images/carrousel/35.png"
import img_36 from "../../images/carrousel/36.png"
import img_37 from "../../images/carrousel/37.png"
import img_38 from "../../images/carrousel/38.png"
import img_39 from "../../images/carrousel/39.png"
import img_40 from "../../images/carrousel/40.png"
import img_41 from "../../images/carrousel/41.png"
import img_42 from "../../images/carrousel/42.png"
import img_43 from "../../images/carrousel/43.png"
import img_44 from "../../images/carrousel/44.png"
import img_45 from "../../images/carrousel/45.png"
import img_46 from "../../images/carrousel/46.png"
import img_47 from "../../images/carrousel/47.png"
import img_48 from "../../images/carrousel/48.png"
import img_49 from "../../images/carrousel/49.png"
import img_50 from "../../images/carrousel/50.png"
import img_51 from "../../images/carrousel/51.png"
import img_52 from "../../images/carrousel/52.png"
import img_53 from "../../images/carrousel/53.png"
import img_54 from "../../images/carrousel/54.png"
import img_55 from "../../images/carrousel/55.png"
import img_56 from "../../images/carrousel/56.png"
import img_57 from "../../images/carrousel/57.png"
import img_58 from "../../images/carrousel/58.png"
import img_59 from "../../images/carrousel/59.png"
import img_60 from "../../images/carrousel/60.png"
import img_61 from "../../images/carrousel/61.png"
import img_62 from "../../images/carrousel/62.png"
import img_63 from "../../images/carrousel/63.png"
import img_64 from "../../images/carrousel/64.png"
import img_65 from "../../images/carrousel/65.png"
import img_66 from "../../images/carrousel/66.png"
import img_67 from "../../images/carrousel/67.png"
import img_68 from "../../images/carrousel/68.png"
import img_69 from "../../images/carrousel/69.png"
import img_70 from "../../images/carrousel/70.png"
import img_71 from "../../images/carrousel/71.png"
import img_72 from "../../images/carrousel/72.png"
import img_73 from "../../images/carrousel/73.png"


export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        img_1,
        img_2,
        img_3,
        img_4,
        img_5,
        img_6,
        img_7,
        img_8,
        img_9,
        img_10,
        img_11,
        img_12,
        img_13,
        img_14,
        img_15,
        img_16,
        img_17,
        img_18,
        img_19,
        img_20,
        img_21,
        img_22,
        img_23,
        img_24,
        img_25,
        img_26,
        img_27,
        img_28,
        img_29,
        img_30,
        img_31,
        img_32,
        img_33,
        img_34,
        img_35,
        img_36,
        img_37,
        img_38,
        img_39,
        img_40,
        img_41,
        img_42,
        img_43,
        img_44,
        img_45,
        img_46,
        img_47,
        img_48,
        img_49,
        img_50,
        img_51,
        img_52,
        img_53,
        img_54,
        img_55,
        img_56,
        img_57,
        img_58,
        img_59,
        img_60,
        img_61,
        img_62,
        img_63,
        img_64,
        img_65,
        img_66,
        img_67,
        img_68,
        img_69,
        img_70,
        img_71,
        img_72,
        img_73
    ];

    useEffect(() => {
        const intervalDuration = activeIndex === images.length - 1 ? 10000 : 3402;

        const intervalId = setInterval(() => {
            // Cambiar a la siguiente imagen en el carrusel
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervalDuration);

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(intervalId);
    }, [activeIndex, images.length]);

    const handlePrevClick = () => {
        // Manejar el clic del botón anterior
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        // Manejar el clic del botón siguiente
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    onClick={handlePrevClick}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    onClick={handleNextClick}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}