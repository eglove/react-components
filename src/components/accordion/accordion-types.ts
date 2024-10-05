import type { JSX } from "react";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type AccordionItemClassNames = {
  container?: string;
  heading?: string;
  section?: string;
  trigger?: string;
};

export type AccordionItemProperties = {
  container?: JSX.IntrinsicElements["div"];
  heading?: JSX.IntrinsicElements[HeadingLevel];
  section?: JSX.IntrinsicElements["section"];
  trigger?: JSX.IntrinsicElements["button"];
};
