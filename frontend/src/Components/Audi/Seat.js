import React from "react";
import './Seat-css.css'

export default class Seat extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)  
  }

  handleClick(e){
    console.log(`row = ${this.props.obj.row}, col = ${this.props.obj.col}, index= ${this.props.index}, _id = ${this.props.obj._id}`)
    if(this.props.obj.status !== "occupied"){
      this.toggle = !this.toggle
    }
  }
  render(){
    return(
     
      <button className={`seat ${(this.props.obj.status==="occupied")? 'occupied':''} ${this.toggle ? 'selected':''}`} onClick={this.handleClick}></button>
      
    )
  }
}