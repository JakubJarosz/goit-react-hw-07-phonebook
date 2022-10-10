import React from 'react'
import PropTypes from 'prop-types'

function Contacts({isSuccess, data, deleteItem}) {
  return (
      <div>
          <ul>
              {isSuccess && data.map(({id, name, phone}) =>
                  <li key={id}>
                      {name}  {phone}
                      <button onClick={() => deleteItem({ id: id })}>Delete</button>
                  </li>
              )}
          </ul>
      </div>
  )
}

Contacts.propTypes = {
    isSuccess: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
}

export default Contacts
