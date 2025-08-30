"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [color, setColor] = useState('rgba(0, 0, 0, 0.8)');
    const [isOverVideo, setIsOverVideo] = useState(false);
    const [isOverImage, setIsOverImage] = useState(false);

    const colors = [
        'rgba(255, 0, 0, 0.8)',
        'rgba(13, 107, 222, 0.8)',
        'rgba(255, 230, 7, 0.9)',
        'rgba(21, 194, 21, 0.8)',
    ];

    const createParticle = (x, y) => {
        if (isOverVideo || isOverImage) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.backgroundColor = color;
        document.body.appendChild(particle);

        gsap.to(particle, {
            y: 50,
            opacity: 0,
            scale: 1,
            duration: 2,
            ease: 'power2.out',
            onComplete: () => particle.remove(),
        });
    };

    const createWaterRipple = (x, y) => {
        const ripple = document.createElement('div');
        ripple.className = 'water-ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        document.body.appendChild(ripple);

        gsap.fromTo(ripple,
            {
                scale: 0,
                opacity: 0.8,
            },
            {
                scale: 3,
                opacity: 0,
                duration: 1.5,
                ease: 'power2.out',
                onComplete: () => ripple.remove(),
            }
        );

        // Create multiple ripples for better effect
        setTimeout(() => {
            const ripple2 = document.createElement('div');
            ripple2.className = 'water-ripple';
            ripple2.style.left = `${x}px`;
            ripple2.style.top = `${y}px`;
            document.body.appendChild(ripple2);

            gsap.fromTo(ripple2,
                {
                    scale: 0,
                    opacity: 0.6,
                },
                {
                    scale: 2,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power2.out',
                    onComplete: () => ripple2.remove(),
                }
            );
        }, 200);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });

            const hoveredEl = document.elementFromPoint(e.clientX, e.clientY);
            const isHoveringVideo = hoveredEl?.getAttribute("data-cursor") === "play";
            const isHoveringImage = hoveredEl?.tagName === "IMG" ||
                hoveredEl?.closest('img') ||
                hoveredEl?.getAttribute("data-cursor") === "image" ||
                hoveredEl?.style.backgroundImage ||
                hoveredEl?.classList.contains('image-container');

            setIsOverVideo(isHoveringVideo);
            setIsOverImage(isHoveringImage);

            cursorRef.current.classList.toggle("video-cursor", isHoveringVideo);
            cursorRef.current.classList.toggle("image-cursor", isHoveringImage);

            if (isHoveringImage) {
                createWaterRipple(e.clientX, e.clientY);
            } else if (!isHoveringVideo) {
                createParticle(e.clientX, e.clientY);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        const colorChangeInterval = setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setColor(randomColor);
            if (!isOverVideo && !isOverImage) {
                cursorRef.current.style.backgroundColor = randomColor;
            }
        }, 1000);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearInterval(colorChangeInterval);
        };
    }, [isOverVideo, isOverImage, color]);

    return (
        <div ref={cursorRef} className="custom-cursor">
            {isOverVideo && (
                <div className="play-button">
                    <div className="play-icon">▶</div>
                    <div className="play-text">PLAY</div>
                </div>
            )}
        </div>
    );
};

export default CustomCursor;
