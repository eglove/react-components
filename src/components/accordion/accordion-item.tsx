import { computed } from "@legendapp/state";
import { Reactive, Show } from "@legendapp/state/react";
import filter from "lodash/filter.js";
import includes from "lodash/includes.js";
import isNil from "lodash/isNil.js";
import { createElement, type PropsWithChildren, type ReactNode, useContext, useId } from "react";
import { twMerge } from "tailwind-merge";

import type {
  AccordionItemProperties as _AccordionItemProperties,
  AccordionItemClassNames,
  HeadingLevel,
} from "./accordion-types.ts";

import { AccordionContext } from "./accordion.tsx";

type AccordionItemProperties = {
  classNames?: AccordionItemClassNames;
  heading: ReactNode;
  headingLevel?: HeadingLevel;
  id?: string;
  properties?: _AccordionItemProperties;
} & PropsWithChildren;

export const AccordionItem = (
  {
    children,
    classNames,
    heading,
    headingLevel,
    id = "single",
    properties,
  }: Readonly<AccordionItemProperties>,
) => {
  const controlsId = useId();
  const accordionId = useId();
  const state = useContext(AccordionContext);
  const isActive = computed(() => {
    return includes(state.openItems.get(), id);
  });

  const setIndex = (value: string, isOpen: boolean) => {
    if (state.isMultiple.get() && isOpen) {
      state.openItems.set([...state.openItems.get(), value]);
    }

    if (state.isMultiple.get() && !isOpen) {
      state.openItems.set(filter(state.openItems.get(), (item) => {
        return item !== value;
      }));
    }

    if (!state.isMultiple.get() && isOpen) {
      state.openItems.set([value]);
    }

    if (!state.isMultiple.get() && !isOpen) {
      state.openItems.set([]);
    }
  };

  return (
    <div
      {...properties?.container}
      className={twMerge(
        state.itemClassNames.container.get(),
        classNames?.container,
      )}
    >
      {/* @ts-expect-error reactive */}
      <Reactive.button
        onClick={() => {
          setIndex(id, !isActive.get());
        }}
        $aria-expanded={isActive}
        aria-controls={controlsId}
        id={accordionId}
        type="button"
        {...properties?.trigger}
        className={twMerge(
          "w-full text-left transition-all",
          state.itemClassNames.trigger.get(),
          classNames?.trigger,
        )}
      >
        {createElement(isNil(headingLevel)
          ? state.headingLevel.get()
          : headingLevel, {
          ...properties?.heading,
          children: heading,
          className: twMerge(
            state.itemClassNames.heading.get(),
            classNames?.heading,
          ),
        })}
        {/* @ts-expect-error reactive */}
      </Reactive.button>
      <Show if={isActive}>
        <section
          aria-labelledby={accordionId}
          id={controlsId}
          {...properties?.section}
          className={twMerge(
            state.itemClassNames.section.get(),
            classNames?.section,
          )}
        >
          {children}
        </section>
      </Show>
    </div>
  );
};
