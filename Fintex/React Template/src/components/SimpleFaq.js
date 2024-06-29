import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "./FintexAccordion";

const SimpleFaq = () => {
  const faqsData = [
    { title: "How to Getting Started your Business" },
    { title: "What is Business & Financial Relationship ?" },
    { title: "What is Importance of Co-working ?" },
    { title: "Useful Front-End Boilerplates And Starter Kits" },
  ];
  const [active, setActive] = useState(`event-0`);
  return (
    <Accordion defaultActiveKey={active} className="accordion">
      {faqsData.map((faq, i) => (
        <FintexAccordion
          key={i}
          active={active}
          onClick={() => setActive(`event-${i}`)}
          title={faq.title}
          eventName={`event-${i}`}
        />
      ))}
    </Accordion>
  );
};
export default SimpleFaq;
