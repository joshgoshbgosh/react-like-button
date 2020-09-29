import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {

  state = {
    likes: 0
  };

  addLike = () => {
    let newCount = this.state.likes + 1;

    this.setState({
      likes: newCount
    });
  };
  render() {
    const likes = this.state.likes;
    if (likes > 1 || likes === 0) {
      return (
        <div>
        <button className="button1" onClick={this.addLike}>Likes</button>
        <span>{likes}</span>
        </div>
      );
    } else {
      return (
        <div>
        <button className="button1" onClick={this.addLike}>Like</button>
        <span>{likes}</span>
        </div>
      )
    };

  }
}


export default App;
