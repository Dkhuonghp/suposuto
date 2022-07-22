import React, { Component } from "react";

const CommentRow = (props) => {
  const sect = props.commentData.map((comm, index) => {
    return (
      <section key={index} className="commentsSection">
        <div className="Comment__title">
          {comm.name}
        </div>
        <div className="nameSection">
          {comm.date}
        </div>
        <div className="commentSection">{comm.comment}</div>
        <div>
          <button
            onClick={() => props.removeComment(index)}
            className="deleteBtn"
          >
            キャンセル
          </button>
        </div>
      </section>
    );
  });

  return <div>{sect}</div>;
};

class CommentSection extends Component {
  render() {
    const { commentData, removeComment } = this.props;

    return (
      <div>
        <CommentRow commentData={commentData} removeComment={removeComment} />
      </div>
    );
  }
}

export default CommentSection;
