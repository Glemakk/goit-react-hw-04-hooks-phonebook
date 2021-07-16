import PropTypes from 'prop-types'

import { List, Item } from './ContactList.styled'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { IconContext } from 'react-icons'

import IconButton from '../IconButton'

export default function ContactList({ contacts, onClick }) {
  return (
    <List>
      {contacts.map((contact) => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <IconButton onClick={() => onClick(contact.id)}>
            <IconContext.Provider value={{ size: '23px' }}>
              <RiDeleteBin6Fill />
            </IconContext.Provider>
          </IconButton>
        </Item>
      ))}
    </List>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}
