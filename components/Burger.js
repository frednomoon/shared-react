import React from "react"

export default function Burger(props) {
  return props.active ? (
    <svg width="36" height="35" viewBox="0 0 36 35" fill="none">
      <line
        x1="2.40677"
        y1="33.4208"
        x2="32.7179"
        y2="2.07634"
        stroke="#111111"
        strokeWidth="4"
      />
      <line
        x1="3.19205"
        y1="2.05246"
        x2="34.5365"
        y2="33.3969"
        stroke="#111111"
        strokeWidth="4"
      />
    </svg>
  ) : (
    <svg width="34" height="32" viewBox="0 0 34 32">
      <line
        x1="0.888916"
        y1="2.14444"
        x2="33.1111"
        y2="2.14444"
        stroke="#111111"
        strokeWidth="4"
      />
      <line
        x1="0.888916"
        y1="16"
        x2="33.1111"
        y2="16"
        stroke="#001F3F"
        strokeWidth="4"
      />
      <line
        x1="0.888916"
        y1="29.8556"
        x2="33.1111"
        y2="29.8556"
        stroke="#111111"
        strokeWidth="4"
      />
    </svg>
  )
}
