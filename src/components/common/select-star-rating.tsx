import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

SelectStarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  messages: PropTypes.array,
  defaultValue: PropTypes.number,
  onSetRating: PropTypes.func,
};

export default function SelectStarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 32,
  className = "",
  messages = [],
  defaultValue = 0,
  onSetRating = 0,
}: {
  maxRating: number;
  color: string;
  size: number;
  className: string;
  messages: [];
  defaultValue: number;
  onSetRating: number;
}) {
  const [rating, setRating] = useState(defaultValue);
  const [tempRating, setTempRating] = useState(0);
  const textStyle = {
    lineHeight: "0",
    margin: "0",
    color,
    fontSize: size,
  };

  function handileRating(rating: number) {
    setRating(rating);
    onSetRating && onSetRating(rating);
  }
  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handileRating(1 + i)}
            full={
              messages.length === maxRating
                ? messages.length >= 1 + i
                : tempRating
                  ? tempRating >= 1 + i
                  : rating >= 1 + i
            }
            hoverIn={() => setTempRating(1 + i)}
            hoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length !== maxRating
          ? tempRating || rating || ""
          : messages[tempRating ? tempRating - 1 : rating - 1]}
      </p>
    </div>
  );
}

function Star({
  onRate,
  full,
  hoverIn,
  hoverOut,
  size,
  color,
}: {
  onRate: MouseEventHandler<HTMLSpanElement>;
  full: boolean;
  hoverIn: MouseEventHandler<HTMLSpanElement>;
  hoverOut: MouseEventHandler<HTMLSpanElement>;
  size: string;
  color: string;
}) {
  const starStyle = {
    height: `${size}px`,
    width: `${size}px`,
    display: "block",
    cursor: "pointer",
    color,
  };
  return (
    <span
      style={starStyle}
      onClick={onRate}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
