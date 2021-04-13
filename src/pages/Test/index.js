import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

const Test = (props) => {
  const { route } = props

  return (
    <div className="P-login">
        {renderRoutes(route.routes)}
    </div>
  )
}

Test.propTypes = {
  route: PropTypes.any.isRequired
}

export default Test
