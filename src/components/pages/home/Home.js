import React from 'react';
import "../home/HomeStyles.css";

const Home = () => {
    return (
        <div>
            <section classNameName="video">
                <button className="btn btnvideo btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#VideoIntro" aria-expanded="true" aria-controls="VideoIntro">
                    Esconder
                </button>
                <video controls autoplay muted id="VideoIntro">
                    <source src="img/intro.mp4" type="video/mp4"></source>
                    <source src="img/intro.ogg" type="video/ogg"></source>
                    Your browser does not support the video tag.
                </video>
            </section>
            <section className="btns-links">
                <button className="btn btn-secondary" type="button">
                    Donar
                </button>
                <button className="btn btn-secondary" type="button">
                    Colaborar
                </button>
            </section>
            <section className="brief-info">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a vel doloremque reprehenderit. Odit, aspernatur modi porro repudiandae odio debitis ratione facere saepe animi laudantium nulla eligendi numquam aut officiis!
                </p>
            </section>
        </div>
    );
};

export default Home;