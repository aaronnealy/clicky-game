import React, { Component } from "react";
import FriendCard from "./components/CharacterCard/FriendCard";
import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";
import friends from "./friends.json";
import Navbar from "./components/Navbar/Navbar"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    clicked: []
  };

  componentDidMount() {
    this.startGame()
  }

  startGame() {
    this.setState({
      friends,
    score: 0,
    topScore: 0,
    clicked: []
    })
  }

    // clickCounter increases this.state.score by 1
    clickCounter = (id) => {
      if (this.state.clicked.includes(id)) {
        //you lose
        this.startGame()
      } else {
        let currentClicked = this.state.clicked;
        currentClicked.push(id);
        this.setState({
          clicked: currentClicked,
          score: this.state.score + 1
        });
        this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } 
    };



    //Need something with Math.random() to reset cards


  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>GAME OF CLICKY!</Title>
        <Navbar score={this.state.score} topScore={this.state.topScore}> Clicky Game </Navbar>
        {this.state.friends.map(friend => (
          <FriendCard
            clickCounter={this.clickCounter}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;