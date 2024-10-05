import type { ReactElement } from "react";

type AccessibleIconProperties = {
  label: string;
  svg: ReactElement;
};

export const AccessibleSvg = (
  {
    label,
    svg,
  }: Readonly<AccessibleIconProperties>,
) => {
  return (
    <>
      <svg
        {...svg.props}
        aria-hidden="true"
        focusable="false"
      />
      <div
        className="sr-only"
      >
        {label}
      </div>
    </>
  );
};
