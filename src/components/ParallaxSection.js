import React, { useRef, useEffect } from 'react';
import './ParallaxSection.css';

const ParallaxSection = ({ id, imageUrl, height = '360px', children }) => {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const bg = bgRef.current;
        if (!section || !bg) return;

        let rafId = null;

        const updateParallax = () => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            let scrolledPast = -sectionTop;
            if (scrolledPast < 0) scrolledPast = 0;
            const maxScroll = sectionHeight;
            let progress = scrolledPast / maxScroll;
            progress = Math.min(1, Math.max(0, progress));

            let translate = 0;
            if (progress > 0.05) {
                // const effectProgress = (progress - 0.2) / (1 - 0.2);
                const effectProgress = progress;
                const maxTranslate = sectionHeight * 0.4;
                translate = effectProgress * maxTranslate;
            }

            bg.style.transform = `translateY(${translate}px)`;
        };

        const animate = () => {
            updateParallax();
            rafId = requestAnimationFrame(animate);
        };

        const handleScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section id={id} ref={sectionRef} className="parallax-section" style={{ height }}>
            <div ref={bgRef} className="parallax-bg" style={{ backgroundImage: `url(${imageUrl})` }} />
            {children && <div className="parallax-content">{children}</div>}
        </section>
    );
};

export default ParallaxSection;