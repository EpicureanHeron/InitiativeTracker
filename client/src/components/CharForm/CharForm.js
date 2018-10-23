import React, { Component } from "react";
import "./CharForm.css";
import API from "./../../utils/API"


class CharForm extends Component {


  state = {
    name: "",
    dex: "",
    playerImage: "",
    player: ""
  };

  handleClick = event => {
    console.log(this.state.name)
    console.log(this.state.dex)
    console.log(this.state.playerImage)
    console.log(this.state.player)

    event.preventDefault()
    let charInfo = {

      name: this.state.name,
      dex: this.state.dex,
      image: this.state.playerImage,
      player: this.state.player
    }
    console.log(charInfo)
    API.saveCharacter(charInfo)
    .then(
      res => console.log(res)
     // this.loadArticles()
    )
  }
 


  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  render = props => {
    return (

  <form>
    <div className="form-group">
     
      <input name ="name" type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Character Name" />
      <input name ="dex" type="dex" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Initiative Bonus" />
      <input name ="playerImage" type="playerImage" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="image URL" />
      <input name = "player" type="player" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Player's name" />

    </div>
   
    <button type="submit"   onClick={this.handleClick}
 className="btn btn-primary">Submit</button>
  </form>
    )
  }
}
  ;

export default CharForm;
