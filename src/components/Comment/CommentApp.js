import React, { Component } from "react";
import CommentSection from "./CommentSection";
import CommentForm from "./CommentForm";

class CommentApp extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    if (localStorage.getItem("state")) {
      this.setState({ ...JSON.parse(localStorage.getItem("state")) });
    }
  }

  handleSubmit = comment => {
    this.setState({ comments: [...this.state.comments, comment] }, () =>
      localStorage.setItem("state", JSON.stringify(this.state))
    );
  };

  removeComment = index => {
    const { comments } = this.state;

    this.setState(
      {
        comments: comments.filter((comment, i) => {
          return i !== index;
        })
      },
      () => localStorage.setItem("state", JSON.stringify(this.state))
    );
  };

  render() {
    const { comments } = this.state;

    return (
      <div className="container">
        <CommentSection
          commentData={comments}
          removeComment={this.removeComment}
        />
        <CommentForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default CommentApp;
