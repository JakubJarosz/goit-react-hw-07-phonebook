import React from 'react'
import PropTypes from 'prop-types'

function Filter(props) {
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

Filter.propTypes = {
    handleInputFilter: PropTypes.func.isRequired,
}

export default Filter
