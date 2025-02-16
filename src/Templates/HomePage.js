import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css Files/HomePage.css"; 
import img3 from "../Images/forest3.png";
import img4 from "../Images/deso5.png";
import img5 from "../Images/deso2.png";
import img6 from "../Images/deso4.png";
import img7 from "../Images/forest1.png";
import img8 from "../Images/forest2.png";

function HomePage() {
    const [isVisible, setIsVisible] = useState(false);
    const desoRef = useRef(null);

    const Flashbang = () => {
        const [isFlashing, setIsFlashing] = useState(false);

        const triggerFlashbang = (duration = 1000) => {
            setIsFlashing(true);
            setTimeout(() => {
                setIsFlashing(false);
            }, duration);
        };

        useEffect(() => {
            const hasFlashed = localStorage.getItem("hasFlashed");

            if (isVisible && !hasFlashed) {
                triggerFlashbang();
                console.log("Flashbang triggered");

                localStorage.setItem("hasFlashed", "true");
            }
        }, []);

        return <div className={`flashbang ${isFlashing ? 'active' : ''}`}></div>;
    };

    useEffect(() => {
        const element = desoRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    useEffect(() => {
        const images = document.querySelectorAll(".img");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        images.forEach((img) => observer.observe(img));

        return () => {
            images.forEach((img) => observer.unobserve(img));
        };
    }, []);

    return (
        <div>
            <Flashbang />
            <section className="warning-section-container">
                <section className="warning-section left">
                    <figure>
                        <img className="img deso" src={img4} alt="a desolated land" />
                        <figcaption>
                            Böyle bir dünya mı istiyorsun?
                            <br />
                            Karanlıkta, nefessiz, umutsuz, cansız...
                        </figcaption>
                    </figure>
                    <figure>
                        <img className="img deso" src={img5} alt="a desolated land" />
                        <figcaption>
                            İstemiyorsun değil mi?
                            <br />
                            Ben de istemezdim. Hem neden isteyeyim.
                        </figcaption>
                    </figure>
                    <figure>
                        <img className="img deso" src={img6} alt="a desolated land" />
                        <figcaption>
                            O zaman unutma şunu hala geç değil.
                            <br />
                            Hala umut var, geç olmadan harekete geç.
                        </figcaption>
                    </figure>
                </section>
                <div className="arrow-container">
                    <div className="arrowright"></div>
                    <div className="arrowleft"></div>
                </div>
                <section className="warning-section right">
                    <figure>
                        <img className="img forest" src={img3} alt="a forest" />
                        <figcaption ref={desoRef}>
                            Evet! Dediğim gibi böyle bir dünya mümkün.
                            <br />
                            Ve yakında.
                        </figcaption>
                    </figure>
                    <figure>
                        <img className="img forest" src={img7} alt="a forest" />
                        <figcaption>
                            Hem de ulaşması zor da değil.
                            <br />
                            Hadi sen de başla.
                        </figcaption>
                    </figure>
                    <figure>
                        <img className="img bottom" src={img8} alt="a forest" />
                        <figcaption>
                            O aydınlık gelecekler uğruna çalışmaya.
                            <br />
                            Peki ne yapacaksın?
                        </figcaption>
                    </figure>
                </section>
            </section>
            <section className="ribbon-container">
                <Link to="/save-us" className="ribbon">Kurtar Bizi</Link>
            </section>
        </div >
    );
}

export default HomePage;
