import { useState } from "react";
import { Accordion } from "react-bootstrap";

const faqsData = [
  "How to Getting Started your Business",
  "What is Business & Financial Relationship ?",
  "What is Importance of Co-working ?",
  "Useful Front-End Boilerplates And Starter Kits",
  "Useful Front-End Boilerplates And Starter Kits",
];

const Index4Accordion = () => {
  const [active, setActive] = useState("collapse1");
  const onClick = (value) =>
    value == active ? setActive(null) : setActive(value);
  return (
    <div
      className="faq-accordion-four mb-40 wow fadeInUp pl-lg-100 mb-50"
      id="accordionOne"
    >
      <Accordion className="accordion" defaultActiveKey={active}>
        {faqsData.map((faq, i) => (
          <div key={faq} className="accordion-card mb-20">
            <div className="card-header">
              <Accordion.Toggle
                as="h5"
                eventKey={`collapse${i + 1}`}
                aria-expanded={active == faq ? "true" : "false"}
                onClick={() => onClick(faq)}
              >
                {faq}
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={`collapse${i + 1}`}>
              <div className="card-body">
                <p>
                  Sed ut perspiciatis unde omnis iste natuse voluptatem
                  accusantium doloremq dantium totam rem aperiam eaque abillo
                  inventore veritatis quasi architecto beatae vitae dicta sunt
                  explicabo nemo voluptatem.
                </p>
              </div>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>
    </div>
  );
};
export default Index4Accordion;
