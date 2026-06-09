"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RectangleConfig = {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  className: string;
  hoverClass: string;
  from: {
    x?: number;
    y?: number;
    xPercent?: number;
    yPercent?: number;
    rotate?: number;
  };
};

export function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const rect1Ref = useRef<HTMLDivElement>(null);
  const rect2Ref = useRef<HTMLDivElement>(null);
  const rect3Ref = useRef<HTMLDivElement>(null);
  const rect4Ref = useRef<HTMLDivElement>(null);
  const rect5Ref = useRef<HTMLDivElement>(null);
  const rect6Ref = useRef<HTMLDivElement>(null);

  const rectangleBaseClasses =
    "absolute bg-[#590178] z-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform";

  const rectangleConfigs = useMemo<RectangleConfig[]>(
    () => [
      {
        ref: rect1Ref,
        className: "top-[-20%] sm:top-[0%] left-[25%] sm:left-[10%] lg:left-[15%] w-12 h-5 sm:w-14 sm:h-5 md:w-20 md:h-8 lg:w-28 lg:h-10",
        hoverClass: "hover:-translate-y-4 hover:translate-x-2 hover:rotate-3",
        from: { xPercent: -250, yPercent: -80 },
      },
      {
        ref: rect2Ref,
        className: "top-[82%] left-[20%] sm:left-[4%] lg:left-[6%] w-12 h-5 sm:w-14 sm:h-5 md:w-20 md:h-8 lg:w-28 lg:h-10",
        hoverClass: "hover:-translate-y-2 hover:-translate-x-2 hover:-rotate-2",
        from: { xPercent: -220, yPercent: 140 },
      },
      {
        ref: rect3Ref,
        className: "top-[45%] sm:top-[70%] top-[60%] left-[36%] sm:left-[30%] lg:left-[33%] w-2 h-8 sm:w-2.5 sm:h-9 md:w-4 md:h-12 lg:w-6 lg:h-16",
        hoverClass: "hover:-translate-y-3 hover:translate-x-1 hover:rotate-6",
        from: { yPercent: 240 },
      },
      {
        ref: rect4Ref,
        className: "top-[75%] left-[48%] sm:left-[50%] lg:left-[52%] w-10 h-5 sm:w-12 sm:h-5 md:w-18 md:h-8 lg:w-24 lg:h-10",
        hoverClass: "hover:-translate-y-4 hover:translate-x-3 hover:rotate-2",
        from: { xPercent: 220, yPercent: -140 },
      },
      {
        ref: rect5Ref,
        className: "top-[-10%] sm:top-[0%] left-[60%] sm:left-[62%] lg:left-[63%] w-12 h-5 sm:w-14 sm:h-5 md:w-20 md:h-8 lg:w-28 lg:h-10",
        hoverClass: "hover:-translate-y-2 hover:-translate-x-1 hover:-rotate-6",
        from: { xPercent: 260 },
      },
      {
        ref: rect6Ref,
        className: "top-[45%] left-[70%] sm:left-[87%] lg:left-[88%] w-5 h-12 sm:w-6 sm:h-14 md:w-8 md:h-20 lg:w-10 lg:h-28",
        hoverClass: "hover:-translate-y-4 hover:translate-x-1 hover:rotate-3",
        from: { xPercent: 220, yPercent: 180 },
      },
    ],
    [rect1Ref, rect2Ref, rect3Ref, rect4Ref, rect5Ref, rect6Ref]
  );

  const text = "SCALIXITY";
  const characters = text.split("");

  useEffect(() => {
    const textContainer = textRef.current;
    const videoContainer = videoContainerRef.current;
    const video = videoRef.current;
    const description = descriptionRef.current;

    const rectEntries = rectangleConfigs
      .map((config) => ({
        ...config,
        element: config.ref.current,
      }))
      .filter((config): config is RectangleConfig & { element: HTMLDivElement } => config.element !== null);

    if (!textContainer || !videoContainer || !video || !description) return;

    const mm = gsap.matchMedia();

    // Desktop Animation (lg only: 1024px - 1279px)
    mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
      // Initial states
      const charSpans = textContainer.querySelectorAll(".char");
      gsap.set(charSpans, { opacity: 0, y: -100, scale: 0.5, rotation: -10 });
      rectEntries.forEach(({ element, from }) => {
        gsap.set(element, { opacity: 0, scale: 0.6, ...from });
      });
      gsap.set(videoContainer, { paddingLeft: "80px", paddingRight: "80px" });
      gsap.set(description, { opacity: 0, x: 100, y: 0 });

      // Text & Rects Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textContainer,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(charSpans, {
        opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.7, ease: "power3.out",
        stagger: { amount: 0.4, from: "start" },
      });

      rectEntries.forEach(({ element, from }, index) => {
        tl.fromTo(
          element,
          { opacity: 0, scale: 0.6, x: from.x ?? 0, y: from.y ?? 0, xPercent: from.xPercent ?? 0, yPercent: from.yPercent ?? 0, rotate: from.rotate ?? 0 },
          { opacity: 1, scale: 1, x: 0, y: 0, xPercent: 0, yPercent: 0, rotate: 0, duration: 0.7, ease: "power3.out" },
          index === 0 ? "-=0.2" : "<+0.08"
        );
      });

      // Video Scroll Animation
      gsap.to(videoContainer, {
        paddingLeft: 0, paddingRight: 0,
        scrollTrigger: { trigger: videoContainer, start: "top bottom", end: "center center", scrub: 0.5 },
      });

      // Calculate fixed y position based on viewport height to maintain consistency
      const viewportHeight = window.innerHeight;
      const targetY = viewportHeight * 0.8; // Fixed at 80vh equivalent
      
      gsap.to(video, {
        scale: 0.3, x: "-33%", y: targetY, borderRadius: "16px",
        scrollTrigger: { trigger: videoContainer, start: "top top", end: "bottom center", scrub: 0.5 },
      });

      gsap.to(description, {
        opacity: 1, x: 0,
        scrollTrigger: { trigger: videoContainer, start: "bottom bottom", end: "bottom center", scrub: 0.5 },
      });
    });

    // XL to 2XL Animation (1280px - 1535px)
    mm.add("(min-width: 1280px) and (max-width: 1535px)", () => {
      // Initial states
      const charSpans = textContainer.querySelectorAll(".char");
      gsap.set(charSpans, { opacity: 0, y: -100, scale: 0.5, rotation: -10 });
      rectEntries.forEach(({ element, from }) => {
        gsap.set(element, { opacity: 0, scale: 0.6, ...from });
      });
      gsap.set(videoContainer, { paddingLeft: "80px", paddingRight: "80px" });
      gsap.set(description, { opacity: 0, x: 100, y: 0 });

      // Text & Rects Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textContainer,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(charSpans, {
        opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.7, ease: "power3.out",
        stagger: { amount: 0.4, from: "start" },
      });

      rectEntries.forEach(({ element, from }, index) => {
        tl.fromTo(
          element,
          { opacity: 0, scale: 0.6, x: from.x ?? 0, y: from.y ?? 0, xPercent: from.xPercent ?? 0, yPercent: from.yPercent ?? 0, rotate: from.rotate ?? 0 },
          { opacity: 1, scale: 1, x: 0, y: 0, xPercent: 0, yPercent: 0, rotate: 0, duration: 0.7, ease: "power3.out" },
          index === 0 ? "-=0.2" : "<+0.08"
        );
      });

      // Video Scroll Animation
      gsap.to(videoContainer, {
        paddingLeft: 0, paddingRight: 0,
        scrollTrigger: { trigger: videoContainer, start: "top bottom", end: "center center", scrub: 0.5 },
      });

      // Calculate fixed y position based on viewport height to maintain consistency
      const viewportHeight = window.innerHeight;
      const targetY = viewportHeight * 0.8; // Fixed at 80vh equivalent
      
      gsap.to(video, {
        scale: 0.3, x: "-33%", y: targetY, borderRadius: "16px",
        scrollTrigger: { trigger: videoContainer, start: "top top", end: "bottom center", scrub: 0.5 },
      });

      gsap.to(description, {
        opacity: 1, x: 0,
        scrollTrigger: { trigger: videoContainer, start: "bottom bottom", end: "bottom center", scrub: 0.5 },
      });
    });

    // Above 2XL Animation (1536px and up)
    mm.add("(min-width: 1536px)", () => {
      // Initial states
      const charSpans = textContainer.querySelectorAll(".char");
      gsap.set(charSpans, { opacity: 0, y: -100, scale: 0.5, rotation: -10 });
      rectEntries.forEach(({ element, from }) => {
        gsap.set(element, { opacity: 0, scale: 0.6, ...from });
      });
      gsap.set(videoContainer, { paddingLeft: "80px", paddingRight: "80px" });
      gsap.set(description, { opacity: 0, x: 100, y: 0 });

      // Text & Rects Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textContainer,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(charSpans, {
        opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.7, ease: "power3.out",
        stagger: { amount: 0.4, from: "start" },
      });

      rectEntries.forEach(({ element, from }, index) => {
        tl.fromTo(
          element,
          { opacity: 0, scale: 0.6, x: from.x ?? 0, y: from.y ?? 0, xPercent: from.xPercent ?? 0, yPercent: from.yPercent ?? 0, rotate: from.rotate ?? 0 },
          { opacity: 1, scale: 1, x: 0, y: 0, xPercent: 0, yPercent: 0, rotate: 0, duration: 0.7, ease: "power3.out" },
          index === 0 ? "-=0.2" : "<+0.08"
        );
      });

      // Video Scroll Animation
      gsap.to(videoContainer, {
        paddingLeft: 0, paddingRight: 0,
        scrollTrigger: { trigger: videoContainer, start: "top bottom", end: "center center", scrub: 0.5 },
      });

      // Calculate fixed y position based on viewport height to maintain consistency
      const viewportHeight = window.innerHeight;
      const targetY = viewportHeight * 0.75; // Fixed at 80vh equivalent for larger screens
      
      gsap.to(video, {
        scale: 0.3, x: "-33%", y: targetY, borderRadius: "16px",
        scrollTrigger: { trigger: videoContainer, start: "top top", end: "bottom center", scrub: 0.5 },
      });

      gsap.to(description, {
        opacity: 1, x: 0,
        scrollTrigger: { trigger: videoContainer, start: "bottom bottom", end: "bottom center", scrub: 0.5 },
      });
    });

    // Mobile/Tablet Animation (below lg)
    mm.add("(max-width: 1023px)", () => {
      // Reset props to ensure clean slate
      gsap.set([video, description, videoContainer], { clearProps: "all" });

      // Initial states
      const charSpans = textContainer.querySelectorAll(".char");
      gsap.set(charSpans, { opacity: 0, y: -50, scale: 0.8, rotation: -5 });
      rectEntries.forEach(({ element, from }) => {
        gsap.set(element, { opacity: 0, scale: 0.6, ...from });
      });
      gsap.set(description, { opacity: 0, y: 30 });

      // Text & Rects
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textContainer,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(charSpans, {
        opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.5, ease: "power3.out",
        stagger: { amount: 0.3, from: "start" },
      });

      rectEntries.forEach(({ element, from }, index) => {
        tl.fromTo(
          element,
          { opacity: 0, scale: 0.6, x: from.x ?? 0, y: from.y ?? 0, xPercent: from.xPercent ?? 0, yPercent: from.yPercent ?? 0, rotate: from.rotate ?? 0 },
          { opacity: 1, scale: 1, x: 0, y: 0, xPercent: 0, yPercent: 0, rotate: 0, duration: 0.6, ease: "power3.out" },
          index === 0 ? "-=0.2" : "<+0.05"
        );
      });

      // Video Scale (Subtle)
      gsap.fromTo(video,
        { scale: 1, borderRadius: "0px" },
        {
          scale: 0.95,
          borderRadius: "12px",
          scrollTrigger: {
            trigger: videoContainer,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 0.5,
          }
        }
      );

      // Description Fade In
      gsap.to(description, {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: description,
          start: "top 95%",
          end: "top 80%",
          scrub: 0.5,
        }
      });
    });

    // Optimize video playback
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => { });
      }
    }

    return () => mm.revert();
  }, [rectangleConfigs]);

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] py-4 sm:py-6 bg-[#FFF2D5] overflow-hidden">
      {/* SCALIXITY Text Section */}
      <div className="relative h-[25vh] sm:h-[30vh] lg:h-[55vh] flex items-center justify-center w-full">
        <div className="relative w-full">
          {/* SCALIXITY Text */}
          <h1
            ref={textRef}
            className="relative z-10 text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[14rem] font-playfair font-bold text-black tracking-wider text-center w-full px-3 sm:px-4"
          >
            {characters.map((char, index) => (
              <span
                key={index}
                className="char inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* Purple Rectangles */}
          {rectangleConfigs.map((rectangle, index) => (
            <div
              key={`purple-rectangle-${index}`}
              ref={rectangle.ref}
              className={`${rectangleBaseClasses} ${rectangle.className} ${rectangle.hoverClass}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div ref={videoContainerRef} className="relative w-full min-h-[40vh]  md:min-h-[50vh] lg:min-h-[150vh] 2xl:min-h-[150vh]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover transform-gpu will-change-transform"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/Scalixity.jpg"
          disablePictureInPicture
          controlsList="nodownload"
        >
          <source src="/videos/Scalixity.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Description */}
        <div
          ref={descriptionRef}
          className="relative w-full px-4 sm:px-6 md:px-8 mt-4 sm:mt-6 md:mt-8 pb-4 sm:pb-6 md:pb-8 lg:absolute lg:bottom-0 lg:left-[38%] lg:right-[2%] lg:w-auto lg:px-0 lg:pr-4 lg:mt-0 lg:pb-0 xl:left-[40%] xl:right-[3%] xl:pr-6 2xl:left-[38%] 2xl:right-[5%] 2xl:pr-8 lg:max-w-3xl xl:max-w-3xl 2xl:max-w-4xl"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed 2xl:leading-tight text-[#1F1F1F] font-medium font-playfair mb-4 sm:mb-5 md:mb-6 lg:mb-5 xl:mb-6 2xl:mb-6">
            At <span className="font-bold text-[#8B05AE] tracking-wide font-playfair">Scalixity</span>, we help businesses turn ideas into powerful digital products — custom web apps, ecommerce systems, dashboards, mobile apps, and AI automations. Our team handles everything from strategy to execution, ensuring fast delivery, scalable architecture, and real results.
          </p>
          <Link href="/contact">
            <button className="bg-[#590178] text-white px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3 lg:px-8 lg:py-3 xl:px-9 xl:py-3.5 2xl:px-10 2xl:py-4 rounded-lg font-manrope font-medium text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl hover:bg-[#7A0499] transition-all duration-300 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] focus:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]">
              Let&apos;s Build Something
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
