import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const ProgressBar = ({ value, color, extraCls }) => {
  return (
    <div
      className={`chart-circle ${extraCls ? extraCls : "one"}`}
      style={{ width: 88, height: 88 }}
    >
      <CircularProgressbar
        width={88}
        value={value}
        strokeWidth={4}
        styles={buildStyles({
          pathColor: color,
          trailColor: "rgba(26, 26, 26, .071)",
        })}
      />{" "}
      <h2 className="number">
        {value}
        <span className="sign">%</span>
      </h2>
    </div>
  );
};
export default ProgressBar;
