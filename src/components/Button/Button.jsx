import React from 'react'
import { CustomButton } from './Button.styled'

function Button({ onClick, text }) {
  return <CustomButton onClick={onClick}>{text}</CustomButton>
}

export default Button
