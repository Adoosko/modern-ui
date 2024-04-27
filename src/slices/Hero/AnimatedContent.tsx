"use client";
import React from "react";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
gsap.registerPlugin(useGSAP);

type Props = {
  slice: Content.HeroSlice;
};

const AnimatedContent = ({ slice }: Props) => {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(
          ".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow ",
          { opacity: 1 },
        );
        return;
      }
      // gsap code here...
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
      });
      tl.fromTo(
        ".hero__heading",
        {
          scale: 0.5,
        },
        { scale: 1, opacity: 1, duration: 1.4 },
      );
      tl.fromTo(
        ".hero__body",
        {
          y: 30,
        },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=0.6",
      );
      tl.fromTo(
        ".hero__button",
        {
          scale: 1.5,
          y: 20,
        },
        { scale: 1, opacity: 1, y: 0, duration: 1.3 },
        "-=0.6",
      );
      tl.fromTo(
        ".hero__image",
        {
          y: 100,
        },
        { opacity: 1, y: 0, duration: 1.3 },
        "-=0.5",
      );
      tl.fromTo(
        ".hero__glow",
        {
          scale: 0.5,
        },
        { scale: 1, opacity: 1, duration: 1.8 },
        "-=1",
      );
    },
    { scope: container },
  ); // <-- scope is for selector text (optional)
  return (
    <div className="relative" ref={container}>
      <StarGrid />
      {isFilled.richText(slice.primary.heading) && (
        <h1
          className="hero__heading text-balance text-center text-5xl font-bold 
           opacity-0 md:text-7xl"
        >
          <PrismicText field={slice.primary.heading} />
        </h1>
      )}

      {isFilled.richText(slice.primary.body) && (
        <div className="hero__body mx-auto mt-6 max-w-md text-balance font-medium text-slate-300 opacity-0">
          <PrismicRichText field={slice.primary.body} />
        </div>
      )}
      {isFilled.link(slice.primary.button_link) && (
        <ButtonLink
          className="hero__button mt-8 opacity-0"
          field={slice.primary.button_link}
        >
          <>{slice.primary.button_label}</>
        </ButtonLink>
      )}
      {isFilled.image(slice.primary.image) && (
        <div className="hero__image glass-container mt-16 w-fit opacity-0">
          <div className="hero__glow absolute inset-0 -z-10 bg-blue-400/50 opacity-0 blur-2xl"></div>
          <PrismicNextImage
            className="rounded-xl "
            field={slice.primary.image}
          />
        </div>
      )}
    </div>
  );
};

export default AnimatedContent;
