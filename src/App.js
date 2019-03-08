import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import cards from './sailormoon.json';
import Card from './Components/Card';
import Row from './renderRows';
import Column from './renderColumn';
import Container from './renderContainer';

// create the function to randomize the cards outside of what is to be renderred


function shuffleCards (sailormoon) {
  for (let i = sailormoon.length -1; i > 0; i --) {
    let j = Math.floor(Math.random() * (i +1));
    [sailormoon[i], sailormoon[j]] = [sailormoon[j], sailormoon[i]];
  }
   return sailormoon;
};

class App extends Component {
  state = {
      cards: cards,
      score: 0,
      topScore: 0,
      message: "Click on a card to begin!",
      clicked: []
      };


//create the main click handler function
handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({ clicked: this.state.clicked.concat(id) });
  } else {
    this.resetGame();
  }
};



// create function that will handle the correct click, change message to correct and keep game going
handleIncrement = () => {
  const newScore = this.state.score + 1;
  this.setState({
    score: newScore,
    message: "Correct! Keep Going!"
  });
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore });
  }
  else if (newScore === 12) {
    this.setState({ message: "CONGRATULATIONS, YOU WIN!" });
  }
  this.reShuffle();
};

resetGame = () => {
  this.setState({
    score: 0,
    topScore: this.state.topScore,
    message: "Oh no! Let's try this again!",
    clicked: []
  });
  this.reShuffle();
};

reShuffle = () => {
  let shuffleCardsAgain = shuffleCards(cards);
  this.setState({cards: shuffleCardsAgain});
}

render() {
  // const {message, score, cards, topScore} = this.state;
  return(
    <Content>
    <Navbar 
    className="row"
    score={this.state.score}
    topScore={this.state.topScore}
    message={this.state.message}
    />

    <Header className="row" />

    <Container>
     <Row>
       {this.state.cards.map(card => (
         <Column size="md-3 sm-6">
         <Card
         key={card.id}
         handleClick={this.handleClick}
         handleIncrement={this.handleIncrement}
         resetGame={this.resetGame}
         reShuffle={this.reShuffle}
         id={card.id}
         image={card.image}
         />
         </Column>
       ))}
     </Row>
    </Container>
    <Footer />
    </Content>
  )
 }  
}

export default App;
