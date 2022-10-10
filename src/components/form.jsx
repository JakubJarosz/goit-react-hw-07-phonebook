import React from 'react'
import PropTypes from 'prop-types'

function form(props) {
  return (
      <div>
          <h1>PhoneBook</h1>
          <form onSubmit={props.handleSubmit}>
              <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
              />
              <br />
              <h2>Number</h2>
              <input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
              />
              <br />
              <button type="submit">Add contact</button>
          </form>
      </div>
  )
}

form.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default form
