"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Bounded from "@/component.tsx/Bounded";
import Shapes from "../Hero/Shapes";

/**
 * Hero Component
 * @param {object} slice - Prismic slice with first_name, last_name, tag_line
 */
const Hero = ({ slice }) => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate individual name letters
      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1, 0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      // Animate job title
      tl.fromTo(
        ".job-title",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);

  // Utility function to split letters for animation
  const renderLetters = (text) => {
    return text?.split("").map((char, idx) => (
      <span key={idx} className="name-animation inline-block">
        {char}
      </span>
    ));
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
        <Shapes />

        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={`${slice.primary.first_name} ${slice.primary.last_name}`}
          >
            <span className="block text-slate-300">
              {renderLetters(slice.primary.first_name)}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
              {renderLetters(slice.primary.last_name)}
            </span>
          </h1>

          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {slice.primary.tag_line}
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
