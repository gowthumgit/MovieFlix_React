import React from "react";
import './Seat-css.css'

export default class Seat extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)  
  }

  handleClick(e){
    console.log(`row = ${this.props.obj.row}, col = ${this.props.obj.col}, index= ${this.props.index}, _id = ${this.props.obj._id}`)

  }
  render(){
    return(
      <div className="seatbody">
      <button className="seat" onClick={this.handleClick}></button>
      </div>
    )
  }
}