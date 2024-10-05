import type { StoryContext } from "@storybook/react";

import { expect, within } from "@storybook/test";

import { AccessibleSvg } from "./accessible-svg.tsx";

export default {};

export const Default = () => {
  return (
    <AccessibleSvg
      svg={
        <svg
          className="lucide lucide-a-arrow-up"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.5 13h6" />
          <path d="m2 16 4.5-9 4.5 9" />
          <path d="M18 16V7" />
          <path d="m14 11 4-4 4 4" />
        </svg>
      }
      label="Some Label"
    />
  );
};

Default.play = async ({ canvasElement }: StoryContext) => {
  const canvas = within(canvasElement);
  const label = canvas.getByText("Some Label");
  const image = document.documentElement.querySelector("svg");

  await expect(image).toHaveAttribute("aria-hidden", "true");
  await expect(image).toHaveAttribute("focusable", "false");
  await expect(label).toHaveClass("sr-only");
};
