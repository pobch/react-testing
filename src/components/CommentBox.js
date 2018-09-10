import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions'

class CommentBox extends Component {
  static propTypes = {
    submitComment: PropTypes.func.isRequired
  }

  state = {
    comment: ''
  }

  handleChange = event => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = event => {
    const { submitComment } = this.props
    const { comment } = this.state

    event.preventDefault()
    submitComment(comment)
    this.setState({ comment: '' })
  }

  render() {
    const { comment } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={comment} />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default connect(
  null,
  actions
)(CommentBox)
