import { getAllCharacters } from '../redux/actions'
import React, { Component } from "react";
import { connect } from "react-redux";
import CharacterCard from "./CharacterCard";

export class Characters extends Component {
  componentDidMount() {
    this.props.getAllCharacters();
  }
  
  render() {
    return (
      // <!-- Tranding Section Start -->
		<div className="container-cards">
            {
              this.props.characters &&
              Object.keys(this.props.characters).map((c) => (
                    <CharacterCard
                    id={this.props.characters[c].id}
                    image={this.props.characters[c].image}
                    key={this.props.characters[c].id}
                    name={this.props.characters[c].name}
                    species={this.props.characters[c].species}
                    origin={this.props.characters[c].origin.name}
                    />
                ))
            }
		</div>
    );
  }
}

export const mapStateToProps = (state) => {
  return{
    characters: state.characters,
  }
}

export const mapDispatchToProps = { getAllCharacters };

export default connect(mapStateToProps, mapDispatchToProps)(Characters); 
