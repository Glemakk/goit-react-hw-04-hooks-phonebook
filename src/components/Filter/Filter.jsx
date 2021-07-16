import PropTypes from 'prop-types'

import React from 'react'
import { FcSearch } from 'react-icons/fc'
import { InputDiv } from '../ContactForm/ContactForm.styled'
import { Input } from '../ContactForm/ContactForm.styled'
import { FilterContainer } from './Filter.styled'
import { IconContext } from 'react-icons'

export default function Filter({ filter, onChange }) {
  return (
    <label>
      <FilterContainer>
        <h3>Find contacts by name</h3>
        <InputDiv>
          <IconContext.Provider value={{ size: '23px' }}>
            <FcSearch />
          </IconContext.Provider>
          &nbsp;
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
            placeholder="Search contact"
            autoComplete="off"
          />
        </InputDiv>
      </FilterContainer>
    </label>
  )
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}
