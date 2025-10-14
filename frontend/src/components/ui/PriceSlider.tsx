"use client";

import { useState } from "react";
import { Range } from "react-range";

const MIN = 0;
const MAX = 1000;
const STEP = 1;

export default function PriceSlider() {
  const [values, setValues] = useState([200, 800]);

  return (
    <div className="m-auto max-w-[230px] my-3">
      <div className="mb-10">
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={setValues}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="relative h-2 w-full bg-gray-300 rounded"
              style={props.style}
            >
              <div
                className="absolute h-full bg-black rounded"
                style={{
                  left: `${(values[0] / MAX) * 100}%`,
                  width: `${((values[1] - values[0]) / MAX) * 100}%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              key={index}
              className="relative h-5 w-5 bg-black rounded-full shadow flex items-center justify-center outline-none focus:outline-none"
            >
              <div className="absolute top-6 mb-2 text-xs font-medium text-black">
                ${values[index]}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
