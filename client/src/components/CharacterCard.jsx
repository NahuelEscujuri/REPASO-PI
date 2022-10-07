import * as action from "../redux/actions.js"
import { useDispatch } from "react-redux";
import React from "react";
import img_default from './img_default.jpeg'

const CharacterCard = (props) => {
  return (
    <div className="card">
      <img src={!props.image?img_default:props.image} alt={props.name}/>
      <div className="card_text">
        <h3>{props.name}</h3>
        <p><span>species:</span> {props.species}</p>
        <p><span>origin:</span> {props.origin}</p>
      </div>
    </div>
  );
};

export const mapDispatchToProps = {action};

export default CharacterCard;