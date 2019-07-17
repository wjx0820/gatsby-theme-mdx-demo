import React from "react"

const Button = ({
  onClickHandler = () => window.alert("world"), // eslint-disable-line
  children
}) => (
  <button type="button" onClick={onClickHandler}>
    {children || "Click me!"}
  </button>
)

export default Button
