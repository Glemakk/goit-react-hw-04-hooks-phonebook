import React from 'react'
import { CustomIconButton } from './IconButton.styled'
import PropTypes from 'prop-types'

function IconButton({ children, onClick }) {
  return (
    <CustomIconButton type="button" onClick={onClick}>
      {children}
    </CustomIconButton>
  )
}

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
}

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default IconButton
