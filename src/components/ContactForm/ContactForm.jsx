import React, { Component } from 'react'
import Button from '../Button'

import { FcPhoneAndroid, FcBusinessContact } from 'react-icons/fc'
import { IconContext } from 'react-icons'
import { Form, InputDiv, Input } from './ContactForm.styled'

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }
  handleChange = ({ target }) => {
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, number } = this.state
    const { onSubmit } = this.props
    onSubmit(name, number)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({ number: '', name: '' })
  }

  render() {
    const { number, name } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label>
            <h2>Name</h2>
            <InputDiv>
              <IconContext.Provider value={{ size: '23px' }}>
                <FcBusinessContact />
              </IconContext.Provider>
              &nbsp;
              <Input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                autoComplete="off"
              />
            </InputDiv>
          </label>

          <label>
            <h2>Number</h2>
            <InputDiv>
              <IconContext.Provider value={{ size: '23px' }}>
                <FcPhoneAndroid />
              </IconContext.Provider>
              &nbsp;
              <Input
                type="tel"
                name="number"
                value={number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                autoComplete="off"
              />
            </InputDiv>
          </label>
          <Button text="Add contact" />
        </Form>
      </div>
    )
  }
}
