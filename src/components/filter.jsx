import React from 'react'
import PropTypes from 'prop-types'

function filter(props) {
  return (
      <div>
          <h2>Contacts</h2>
          <input
              type="text"
              onChange={props.handleInputFilter}
          />
      </div>
  )
}

filter.propTypes = {
    handleInputFilter: PropTypes.func.isRequired,
}

export default filter
