import Bounded from "@/components/Bounded";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2
              className="text-balance text-center  text-5xl
          font-bold leading-tight md:text-7xl"
            >
              {children}
            </h2>
          ),
          em: ({ children }) => (
            <em
              className="bg-gradient-to-b from-yellow-100 to-yellow-500 
            bg-clip-text font-bold text-transparent"
            >
              {children}
            </em>
          ),
        }}
      />
      <div className="mx-auto mt-6 max-w-md text-balance text-center font-medium text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>
      <div
        className="mt-16 grid max-w-4xl
      grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-3"
      >
        {slice.items.map((item) => (
          <div
            key={asText(item.title)}
            className={clsx(
              `glass-container row-span-3 mx-3 my-3
           grid grid-rows-subgrid rounded-lg bg-gradient-to-b
            from-zinc-800 to-zinc-950 p-4`,
              item.wide ? "md:col-span-2" : "md:col-span-1",
            )}
          >
            <h3 className="text-2xl font-medium">
              <PrismicText field={item.title} />
            </h3>
            <div className="max-w-md  text-balance text-slate-300">
              <PrismicRichText field={item.body} />
            </div>

            <PrismicNextImage field={item.image} className="max-h-36 w-auto" />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Bento;
