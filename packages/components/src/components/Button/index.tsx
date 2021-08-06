import React from 'react'

interface ButtonProps {
  onClick: () => void,
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (<button {...props}>{props.children}</button>)
}