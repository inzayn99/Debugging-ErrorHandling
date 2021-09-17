import React from "react";
import Heading from "./Heading";
import Images from "./Images";




function Card(props){
    // console.log(props);
    return(
      <>
      <div className="cards">
      <div className="card ">
      <Images imgsrc={props.imgsrc}/>
      <div className="card_info">
      <span className="card_category"> {props.title}</span>
      <heading sname={props.sname }/>
      <h3 className="card_title">{props.sname} </h3>
      <a href={props.link} target="_blank">
      <button>watch now </button>
      </a>
      </div>
      </div>
      </div>
        </>
    )
  }
export default Card;  