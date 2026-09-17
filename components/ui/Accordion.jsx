"use client";

import { useState } from "react";

export default function Accordion({ items, defaultOpenIndex = -1, idPrefix = "accordion" }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-background">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const buttonId = `${idPrefix}-button-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div key={buttonId}>
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-primary-dark"
            >
              {item.question}
              <span
                className={`shrink-0 text-2xl text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {/* grid-template-rows 0fr↔1fr trükk animálja a lenyílást — a
                `hidden` attribútum ezt instant kapcsolná, nem animálható. */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!isOpen}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-base leading-relaxed text-muted">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
