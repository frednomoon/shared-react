import React from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"

import remcalc from "remcalc"

const OuterContainer = styled.div`
  position: ${props => (props.relative ? "relative" : "absolute")};
  background: ${props => (props.background ? props.background : "#ffffff")};
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`

const SVGContainer = styled.div`
  position: relative;
  margin: auto;
  width: ${props => remcalc(props.width)};
  height: ${props => remcalc(props.width)};
`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`

const Circular = styled.svg`
  animation: ${rotate} 2s linear infinite;
  transform-origin: center center;
  margin: auto;
`

const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke: ${props => props.theme[props.color] || props.color};
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-linecap: round;
`

const Loader = ({ show, color, width, ...rest }) => {
  if (show) {
    return (
      <OuterContainer key={1} {...rest}>
        <SVGContainer width={width}>
          <Circular viewBox="25 25 50 50">
            <Circle
              color={color}
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2.5"
              strokeMiterlimit="10"
            />
          </Circular>
        </SVGContainer>
      </OuterContainer>
    )
  }
  return null
}

Loader.defaultProps = {
  show: true,
  background: "none",
  relative: false,
  color: "black",
  width: 200
}

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
  background: PropTypes.string,
  relative: PropTypes.bool,
  color: PropTypes.string,
  width: PropTypes.number
}

export default Loader
