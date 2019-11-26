import { css } from "styled-components"

export default css`
  html,
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  button {
    color: inherit;
    cursor: pointer;
    border: none;
    background: none;
    &:focus {
      outline: none;
    }
  }
`
