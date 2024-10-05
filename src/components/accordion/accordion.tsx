import { observable } from "@legendapp/state";
import { observer, useObservable } from "@legendapp/state/react";
import { createContext, type ReactNode } from "react";

import type { AccordionItemClassNames, HeadingLevel } from "./accordion-types.ts";

type AccordionProperties = {
  children: ReactNode;
  headingLevel?: HeadingLevel;
  isMultiple?: boolean;
  itemClassNames?: AccordionItemClassNames;
};

const accordionDefaultState = observable({
  headingLevel: "h3",
  isMultiple: false as boolean,
  itemClassNames: undefined as AccordionProperties["itemClassNames"],
  openItems: [] as string[],
});
export const AccordionContext = createContext(accordionDefaultState);

export const Accordion = observer(
  ({
    children,
    headingLevel = "h3",
    isMultiple = false,
    itemClassNames,
  }: Readonly<AccordionProperties>) => {
    const state = useObservable({
      ...accordionDefaultState,
      headingLevel,
      isMultiple,
      itemClassNames,
    });

    return (
      <AccordionContext.Provider value={state}>
        {children}
      </AccordionContext.Provider>
    );
  },
);
