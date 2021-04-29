import React, { FC } from "react";
import { navigate } from "gatsby";

export interface Props {
  title: string;
  url: string;
}

const CTA: FC<Props> = ({ title, url }) => {
  const navigateTo = () => navigate(url);

  return (
    <div className="flex items-center justify-center mt-9">
      <button
        type="button"
        className="bg-primary hover:bg-darker-primary text-invert-text text-md font-medium uppercase px-6 py-3 tracking-wide outline-none rounded-md shadow"
        onClick={navigateTo}
      >
        {title}
      </button>
    </div>
  );
};

export default CTA;
