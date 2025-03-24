import React, { useEffect } from "react";

const NvtStars = () => {
    useEffect(() => {
        const starsContainer = document.querySelector(".stars");

        for (let i = 0; i < 100; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            starsContainer.appendChild(star);
        }

        // Thêm sao băng
        const shootingStar = document.createElement("div");
        shootingStar.className = "shooting-star";
        starsContainer.appendChild(shootingStar);
    }, []);

    return <div className="stars"></div>;
};

export default NvtStars;
