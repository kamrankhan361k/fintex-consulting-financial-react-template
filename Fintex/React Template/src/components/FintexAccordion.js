import { Accordion } from "react-bootstrap";

const FintexAccordion = ({ title, eventName, onClick, active }) => {
  return (
    <div
      className={`accordion-card mb-15 ${
        active === eventName ? "accordion-active" : ""
      }`}
    >
      <div className="card-header">
        <Accordion.Toggle
          as={"h5"}
          eventKey={eventName}
          aria-expanded={active === eventName ? "true" : "false"}
          onClick={() => onClick()}
        >
          {title}
        </Accordion.Toggle>
      </div>
      <Accordion.Collapse eventKey={eventName}>
        <div className="card-body">
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit ess
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiats
            quo voluptas nulla pariatur ways in futures
          </p>
        </div>
      </Accordion.Collapse>
    </div>
  );
};
export default FintexAccordion;
