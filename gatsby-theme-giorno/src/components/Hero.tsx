import React, { FC } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroImage from "./HeroImage";
import CTA from "./CTA";
import PlainContent from "./PlainContent";

interface Props {
  module: {
    title: string;
    description: unknown;
    whiteText: boolean;
    textAlignment: "center" | "left" | "right";
    cta?: {
      title: string;
      url: string;
    };
    image: {
      asset: IGatsbyImageData;
    };
  };
}

const Hero: FC<Props> = ({ module }) => {
  const { title, description, whiteText, textAlignment, image, cta } = module;

  return (
    <section className="grid grid-rows-1 grid-cols-1 items-center">
      <header className={`${whiteText ? "text-white" : "text-gray-900"} z-10`} style={{ gridArea: "1/1" }}>
        <div
          className={`px-8 md:px-32 ${
            textAlignment === "center"
              ? "text-center"
              : textAlignment === "left"
              ? "text-left pr-8 sm:pr-16 md:pr-32 lg:pr-72"
              : "text-right pr-8 sm:pr-16 md:pr-32 lg:pr-72"
          }`}
        >
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>
            <PlainContent content={description} />
          </HeroSubtitle>
          {cta && cta.title ? <CTA title={cta.title} url={cta.url} /> : null}
        </div>
      </header>

      <main style={{ gridArea: "1/1" }}>
        <HeroImage asset={image.asset} />
      </main>
    </section>
  );
};

export default Hero;
