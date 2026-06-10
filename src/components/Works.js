import React, { useState, useRef, useEffect } from "react";
import "../styles/Works.css";
import { motion } from "framer-motion";

import w1 from "../images/work (1).png";
import w2 from "../images/work (2).png";
import w3 from "../images/work (3).png";
import w4 from "../images/work (4).png";
import w5 from "../images/work (5).png";
import w6 from "../images/work (6).png";
import w7 from "../images/work (7).png";

const works = [
    { img: w1, title: "# Future of Eye Care", desc: "Driven by Doctors, Powered by AI", url: "https://eyefit.ai/" },
    { img: w2, title: "LookPrior", desc: "LookPrior is a mobile marketplace where you can use both images and videos to sell new and used items.", url: "https://about.lookprior.com/" },
    { img: w3, title: "notifi.Network", desc: "Notifi stands at the forefront as a trusted platform, driving customer engagement innovation.", url: "https://notifi.network/" },
    { img: w4, title: "RESLILENCE SOFT", desc: "Resiliencesoft have experts on these technologies, and it grows your business expertise.", url: "https://www.resiliencesoft.com/" },
    { img: w5, title: "AI Marketing Agents", desc: "From AI Search and SEO to paid ads, Reddit, signal-based outbound, Metaflow agents reason like experienced growth operators and execute at LLM speed", url: "https://metaflow.life/" },
    { img: w6, title: "VIBOX GAMIMG", desc: "Take your gaming experience to the next level with our top-tier gaming PCs. Dive into immersive gameplay with a system designed for speed, power, and precision.", url: "https://stage.vibox.com/" },
    { img: w7, title: "Credexon", desc: "A revolutionary SaaS gaming API to enhance customer engagement across apparel, electronics, and more", url: "https://credexon.com/" },
];

const Works = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    const cardWidth = 320;
    const gap = 24;

    const resetAutoplay = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            handleNext();
        }, 5000);
    };

    useEffect(() => {
        resetAutoplay(); 
        return () => clearTimeout(timeoutRef.current);
        // eslint-disable-next-line
    }, [current]);

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + works.length) % works.length);
        resetAutoplay();
    };

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % works.length);
        resetAutoplay();
    };

    return (
        <div className="works" id="works">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="heading">
                    <p className="heading-sub-text">Built from my skills, experience, and real business results</p>
                    <p className="heading-text">Works</p>
                </motion.div>

                <div className="slider-wrapper">
                    <button className="slider-arrow left" onClick={handlePrev} aria-label="Previous">‹</button>
                    <div className="slider-window">
                        <motion.div
                            className="slider-track"
                            animate={{ x: -(current * (cardWidth + gap)) }}
                            transition={{ duration: 0.6, ease: "easeOut" }}>
                            {works.map((item, idx) => (
                                <a
                                    className="slide-card-link"
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={idx}>
                                    <div className="slide-card">
                                        <span className="slide-number">{String(idx + 1).padStart(2, "0")}</span>
                                        <img src={item.img} alt={item.title} className="slide-img" />
                                        <div className="slide-body">
                                            <p className="slide-title">{item.title}</p>
                                            <p className="slide-desc">{item.desc}</p>
                                            <div className="slide-meta">
                                                <span className="slide-tag">Live site</span>
                                                <span className="slide-link">Visit</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                    <button className="slider-arrow right" onClick={handleNext} aria-label="Next">›</button>
                </div>
            </div>
        </div>
    );
};

export default Works;
