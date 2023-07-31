import './index.css'

const CommentItem = props => {
  const {details} = props
  // eslint-disable-next-line
  const {id, name, comment, isLiked, date} = details
  return (
    <li className="listEdit">
      <div className="s1">
        <h1>{name}</h1>
      </div>
      <p>{comment}</p>
      <div className="buttonContainer">
        <img
          className="imgEdit"
          alt="like"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
        />
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
        />
      </div>
    </li>
  )
}

export default CommentItem
