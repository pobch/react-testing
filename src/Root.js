import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import PropTypes from 'prop-types'
import reducers from './reducers'

const Root = props => {
  const { children, initialState } = props
  const store = createStore(reducers, initialState)

  return <Provider store={store}>{children}</Provider>
}

Root.propTypes = {
  children: PropTypes.element.isRequired,
  initialState: PropTypes.objectOf(PropTypes.object)
}

Root.defaultProps = {
  initialState: {}
}

export default Root
