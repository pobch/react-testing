import React, { Component } from 'react'

class CommentBox extends Component {
  state = {
    comment: ''
  }

  handleChange = event => {
    this.setState({ comment: event.target.value })
  }

  render() {
    const { comment } = this.state

    return (
      <form>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={comment} />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default CommentBox
