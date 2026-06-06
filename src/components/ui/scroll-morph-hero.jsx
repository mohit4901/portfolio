"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useSpring, useScroll, useMotionValue } from "framer-motion";
import { hackathons } from "@/data";

// --- FlipCard Component ---
const IMG_WIDTH = 80;  
const IMG_HEIGHT = 115;

function FlipCard({
    win,
    index,
    target,
}) {
    return (
        <motion.div
            // Smoothly animate to the coordinates defined by the parent scroll value
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 55,
                damping: 18,
            }}

            // Initial style
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d", 
                perspective: "1000px",
            }}
            className="cursor-pointer group z-20"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-zinc-900 border border-white/10"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={win.photo}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-zinc-950 flex flex-col items-center justify-center p-2 border border-white/20"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="flex flex-col items-center justify-center h-full w-full select-none text-center">
                        <span className="text-[7px] font-mono font-bold text-white bg-white/10 border border-white/15 px-1 py-0.5 rounded uppercase tracking-wider mb-1.5 truncate max-w-full">
                            {win.achievement}
                        </span>
                        <h5 className="text-[9px] font-bold text-white leading-tight mb-1.5 line-clamp-2">
                            {win.title}
                        </h5>
                        <p className="text-[7px] text-zinc-500 font-mono">
                            {win.year}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const lerp = (start, end, t) => start * (1 - t) + end * t;

// Helper to interpolate between two layout coordinate objects
const interpolateTarget = (posA, posB, t) => {
    return {
        x: lerp(posA.x, posB.x, t),
        y: lerp(posA.y, posB.y, t),
        rotation: lerp(posA.rotation, posB.rotation, t),
        scale: lerp(posA.scale, posB.scale, t),
        opacity: lerp(posA.opacity, posB.opacity, t),
    };
};

export default function ScrollMorphHero() {
    const TOTAL_IMAGES = hackathons.length;
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Page Scroll Hook ---
    // Tracks scrollY relative to the container entering the viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 95%", "start 15%"]
    });

    // Add high stiffness and damping for lightning-fast and responsive updates
    const smoothScroll = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
    const [scrollValue, setScrollValue] = useState(0);
    
    // Parallax mouse position
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 35, damping: 20 });
    const [parallaxValue, setParallaxValue] = useState(0);

    // Sync Motion Values with React State
    useEffect(() => {
        const unsubscribeScroll = smoothScroll.on("change", setScrollValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeScroll();
            unsubscribeParallax();
        };
    }, [smoothScroll, smoothMouseX]);

    // Handle Parallax
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // --- Precompute Positions & Interpolations ---
    // 1. Scatter positions
    const scatterPositions = useMemo(() => {
        return hackathons.map((_, i) => {
            const angle = (i / hackathons.length) * Math.PI * 2;
            const radius = 220 + (i % 2) * 40;
            return {
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius - 40,
                rotation: (i % 3 === 0 ? 35 : i % 3 === 1 ? -15 : -45),
                scale: 0.65,
                opacity: 0.35,
            };
        });
    }, []);

    // 2. Straight horizontal line positions
    const linePositions = useMemo(() => {
        const lineSpacing = 90;
        const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
        return hackathons.map((_, i) => ({
            x: i * lineSpacing - lineTotalWidth / 2 + lineSpacing / 2,
            y: 0,
            rotation: 0,
            scale: 0.9,
            opacity: 1,
        }));
    }, [TOTAL_IMAGES]);

    // 3. Circle positions
    const getCirclePos = (i, w, h) => {
        const minDimension = Math.min(w, h);
        const circleRadius = Math.min(minDimension * 0.35, 175);
        const circleAngle = (i / TOTAL_IMAGES) * 360;
        const circleRad = (circleAngle * Math.PI) / 180;
        return {
            x: Math.cos(circleRad) * circleRadius,
            y: Math.sin(circleRad) * circleRadius,
            rotation: circleAngle + 90,
            scale: 1,
            opacity: 1,
        };
    };

    // 4. Bottom Arc positions
    const getArcPos = (i, w, h, shuffleProgress) => {
        const isMobile = w < 768;
        const baseRadius = Math.min(w, h * 1.5);
        const arcRadius = baseRadius * (isMobile ? 1.3 : 1.05);

        const arcApexY = h * (isMobile ? 0.32 : 0.25);
        const arcCenterY = arcApexY + arcRadius;

        const spreadAngle = isMobile ? 80 : 100;
        const startAngle = -90 - (spreadAngle / 2);
        const step = spreadAngle / (TOTAL_IMAGES - 1);

        const maxRotation = spreadAngle * 0.75;
        const boundedRotation = -shuffleProgress * maxRotation;

        const currentArcAngle = startAngle + (i * step) + boundedRotation;
        const arcRad = (currentArcAngle * Math.PI) / 180;

        return {
            x: Math.cos(arcRad) * arcRadius + parallaxValue,
            y: Math.sin(arcRad) * arcRadius + arcCenterY,
            rotation: currentArcAngle + 90,
            scale: isMobile ? 1.15 : 1.3,
            opacity: 1,
        };
    };

    return (
        <div ref={containerRef} className="relative w-full h-[520px] overflow-hidden">
            {/* Main Viewport */}
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000 select-none">
                <div className="relative flex items-center justify-center w-full h-full">
                    {hackathons.map((win, i) => {
                        const w = containerSize.width || 800;
                        const h = containerSize.height || 500;

                        // Layout positions
                        const scatterPos = scatterPositions[i];
                        const linePos = linePositions[i];
                        const circlePos = getCirclePos(i, w, h);
                        const arcPosZero = getArcPos(i, w, h, 0);

                        let target;

                        // Scroll range is divided into 4 segments:
                        // [0.00 - 0.25]: Scatter -> Line
                        // [0.25 - 0.50]: Line -> Circle
                        // [0.50 - 0.75]: Circle -> Bottom Arc
                        // [0.75 - 1.00]: Bottom Arc Shuffling
                        if (scrollValue <= 0.25) {
                            const t = scrollValue / 0.25;
                            target = interpolateTarget(scatterPos, linePos, t);
                        } else if (scrollValue > 0.25 && scrollValue <= 0.50) {
                            const t = (scrollValue - 0.25) / 0.25;
                            target = interpolateTarget(linePos, circlePos, t);
                        } else if (scrollValue > 0.50 && scrollValue <= 0.75) {
                            const t = (scrollValue - 0.50) / 0.25;
                            target = interpolateTarget(circlePos, arcPosZero, t);
                        } else {
                            const t = Math.min((scrollValue - 0.75) / 0.25, 1);
                            target = getArcPos(i, w, h, t);
                        }

                        return (
                            <FlipCard
                                key={i}
                                win={win}
                                index={i}
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
            
            {/* Subtle tracking indicator */}
            <div className="absolute bottom-2 right-4 text-[9px] font-mono text-zinc-700 uppercase tracking-widest pointer-events-none select-none z-10">
                SCROLL STATUS: {(scrollValue * 100).toFixed(0)}%
            </div>
        </div>
    );
}
