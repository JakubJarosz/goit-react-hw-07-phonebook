import React from 'react'
import PropTypes from 'prop-types'

function contacts(props) {
  return (
      <div>
          <ul>
              {props.isSuccess && props.data.map((el) =>
                  <li key={el.id}>
                      {el.name}  {el.phone}
                      <button onClick={() => props.deleteItem({ id: el.id })}>Delete</button>
                  </li>
              )}
          </ul>
      </div>
  )
}

contacts.propTypes = {
    isSuccess: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
}

export default contacts
