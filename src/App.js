//imports dependencies and files
import React, { Component } from "react";
import Scorebar from "./components/Scorebar";
import PartCard from "./components/PartCard";
import Footer from "./components/Footer";
import part from "./parts.json";
import "./App.css";
import swal from 'sweetalert2';

//sets initial states
class App extends Component {
  state = {
    part,
    clickedPart: [],
    score: 0,
    level: 2,
    level2: 1,
    levelScore: 0
  };

//when you click on a part it is taken out of the array
  imageClick = event => {
    const currentPart = event.target.alt;
    const PartAlreadyClicked =
      this.state.clickedPart.indexOf(currentPart) > -1;

//if you click on a part that has already been selected, the game is reset and cards reordered
    if (PartAlreadyClicked) {
      this.setState({
        part: this.state.part.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPart: [],
        score: 0,
        level: 1,
        levelScore: 0
      });
      swal({
        title: 'Wrong! Game Over',
        text: 'You made it to level ' + this.state.level2 + ' with a score of ' + this.state.score,
        imageUrl: '../images/fire.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
        animation: false
      })

//if you click on a correct part, your score is increased and cards reordered
    } else {
      this.setState(
        {
          part: this.state.part.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPart: this.state.clickedPart.concat(
            currentPart
          ),
          score: this.state.score + 1,
          levelScore: this.state.levelScore + 1
        },
//if you get all 12 parts corrent the level increases and you start the next level        
        () => {
          if (this.state.levelScore === 12) {
            swal({
              title: 'Great Job!',
              text: 'Are you ready for Level ' + this.state.level + '?',
              imageUrl: '../images/engine.jpg',
              imageWidth: 400,
              imageHeight: 300,
              imageAlt: 'Custom image',
              animation: false
            })
            this.setState({
              part: this.state.part.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPart: [],
              level: this.state.level + 1,
              level2: this.state.level2 + 1,
              levelScore: 0
            });
            
          }
        }
      );
    }
  };

//the order of components to be rendered: Scorebar, PartCard, footer 
  render() {
    return (
      <div>
        <Scorebar 
          score={this.state.score}
          level={this.state.level}
        />
        <div className="wrapper">
          {this.state.part.map(part => (
            <PartCard
              imageClick={this.imageClick}
              id={part.id}
              key={part.id}
              image={part.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;