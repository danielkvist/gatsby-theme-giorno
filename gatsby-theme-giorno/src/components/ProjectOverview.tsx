import React, { FC } from "react";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import useSanityConfig from "../hooks/use-sanity-config";
import ImageBlock from "./ImageBlock";
import PlainContent from "./PlainContent";

interface Props {
  project: {
    name: string;
    description: unknown;
    slug: {
      current: string;
    };
    image: {
      asset: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const ProjectOverview: FC<Props> = ({ project }) => {
  const { name, description, slug, image } = project;
  const {
    projects: { enable },
  } = useSanityConfig();

  return (
    <article className="mb-6">
      <header>
        <div className="h-auto max-w-3xl">
          <ImageBlock image={image.asset.gatsbyImageData} altText={name} />
        </div>
        <div className="mt-2">
          {enable ? (
            <Link to={`/projects/${slug}`}>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-3">{name}</h2>
            </Link>
          ) : (
            <h2 className="text-2xl sm:text-3xl font-semibold font-serif mb-3">{name}</h2>
          )}
        </div>
      </header>
      <main>
        <p className="text-xl max-w-prose">
          <PlainContent content={description} />
        </p>
      </main>
    </article>
  );
};

export default ProjectOverview;
