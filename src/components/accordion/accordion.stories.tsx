import map from "lodash/map.js";

import { AccordionItem } from "./accordion-item.tsx";
import { Accordion } from "./accordion.tsx";

export default {};

const accordions = [
  {
    content: "Hello",
    heading: "One",
    id: "one",
  },
  {
    content: "Hello",
    heading: "Two",
    id: "two",
  },
  {
    content: "Hello",
    heading: "Three",
    id: "three",
  },
];

const classNames = {
  container: "bg-blue-100",
  heading: "font-bold",
  section: "bg-blue-200 p-1",
  trigger: "p-2",
};

export const Default = () => {
  return (
    <Accordion
      headingLevel="h4"
      itemClassNames={classNames}
    >
      {map(accordions, (accordion) => {
        return (
          <AccordionItem
            heading={accordion.heading}
            id={accordion.id}
            key={accordion.id}
          >
            {accordion.content}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export const Multiple = () => {
  return (
    <>
      <Accordion
        isMultiple
        itemClassNames={classNames}
      >
        {map(accordions, (accordion) => {
          return (
            <AccordionItem
              heading={accordion.heading}
              id={accordion.id}
              key={accordion.id}
            >
              {accordion.content}
            </AccordionItem>
          );
        })}
      </Accordion>
      <br />
      <Accordion
        isMultiple
        itemClassNames={classNames}
      >
        {map(accordions, (accordion) => {
          return (
            <AccordionItem
              heading={accordion.heading}
              id={accordion.id}
              key={accordion.id}
            >
              {accordion.content}
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};
