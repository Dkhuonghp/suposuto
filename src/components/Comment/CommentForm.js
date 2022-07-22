import React, { Component } from "react";
import Button from "../Button";
import HoverStar from "./HoverStar"
class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      comment: ""
    };

    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const monthNames = [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月"
    ];
    const yy = new Date().getFullYear()
    const dd = new Date().getDate();
    const mm = monthNames[new Date().getMonth()];
    const hh = new Date().getHours();
    const mins = new Date().getMinutes();
    const commentTime = `${yy}年 ${mm} ${dd}日 ${hh}:${mins}`;

    this.setState({
      [name]: value,
      date: [commentTime]
    });
  };

  submitForm = () => {
    if (!this.state.name.length || !this.state.comment.length) {
      alert("");
      return;
    } else {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }

    const currentState = document.getElementById("app");

    // localStorage.setItem("text", currentState.innerHTML);
  };

  render() {
    const { name, comment } = this.state;

    return (
      <div>
        <div className="comment__title">商品の評価</div>

        <HoverStar/>
        
        <form>
          <div className="comment__title">質問タイトル</div>
          <input
            type="text"
            name="name"
            placeholder=""
            value={name}
            onChange={this.handleChange}
          />
          <div className="comment__title">質問内容</div>
          <textarea
            type="text"
            name="comment"
            placeholder=""
            value={comment}
            onChange={this.handleChange}
            className="submitComm"
          />
          <div className="flex">


            <div
              onClick=""
              className="titleCloseBtn"
            >
              キャンセル
            </div>
            <div
              onClick={this.submitForm}
              className="close titleCloseBtn"
            >
              投稿する
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default CommentForm;
