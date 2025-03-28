import { Component } from "react";

class ContentRating extends Component {
  state = {
    numberOfLikes: 0,
    numberOfDislikes: 0,
    onLike: () => {
      this.setState({
        numberOfLikes: this.state.numberOfLikes + 1,
      })
    },
    onDislike: () => {
      this.setState({numberOfDislikes: this.state.numberOfDislikes + 1})
    },
  }

  render() {
    return(
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        textAlign: "center"
    }}>
        <h2>Number of Likes = {this.state.numberOfLikes}</h2>
        <h2>Number of Dislikes = {this.state.numberOfDislikes}</h2>
        <button onClick={this.state.onLike}>Like</button>
        <button onClick={this.state.onDislike}>Dislike</button>
    </div>
    )
  }
}

export default ContentRating;