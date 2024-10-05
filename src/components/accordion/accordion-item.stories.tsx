import { AccordionItem } from "./accordion-item.tsx";

export default {};

export const Default = () => {
  return (
    <AccordionItem
      classNames={{
        container: "bg-blue-100",
        heading: "font-bold",
        section: "bg-blue-200 p-1",
        trigger: "p-2",
      }}
      heading="title"
      headingLevel="h3"
      id="item"
    >
      <p>
        Hello
      </p>
    </AccordionItem>
  );
};
