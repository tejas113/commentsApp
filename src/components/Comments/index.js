import {Component} from 'react'
import CommentItem from '../CommentItem'
// eslint-disable-next-line
import {v4} from 'uuid'
import './index.css'
// eslint-disable-next-line
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], nameInput: '', commentInput: ''}

  nameChange = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  commentChange = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  renderComments = () => {
    // eslint-disable-next-line
    const {commentsList, nameInput, commentInput} = this.state
    // eslint-disable-next-line
    return commentsList.map(eachItem => (
      <CommentItem key={eachItem.id} details={eachItem} />
    ))
  }

  onAddComment = event => {
    event.preventDefault()

    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
      date: new Date(),
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  render() {
    // eslint-disable-next-line
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div className="mainContianer">
        <div className="secondContainer">
          <div className="firstContainer">
            <div className="commentsSection">
              <h1 className="headEdit">Comments</h1>
              <p className="paraEdit">Say Something about 4.0 Technologies</p>
              <form className="commentsSection">
                <input
                  value={nameInput}
                  onChange={this.nameChange}
                  type="text"
                  className="input1Edit"
                />
                <textarea
                  onChange={this.commentChange}
                  value={commentInput}
                  className="areaEdit"
                />
                <button
                  onSubmit={this.onAddComment}
                  type="submit"
                  className="btnEdit"
                >
                  Add Comment
                </button>
              </form>
            </div>
            <img
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
          <hr className="line" />
          <div className="commentsContainer">
            <p className="para">
              <span>{commentsList.length}</span> Comments
            </p>
            <ul className="realCommentEdit">{this.renderComments()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
