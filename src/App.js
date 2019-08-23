import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Field from "./Components/Field/Field";
import  SideBar from "./Components/SideBar/SideBar";
import mole from './img/mole.jpg';


class App extends Component{

constructor(props){
  super(props)
  this.state = {
    winScore:0,
    loseScore:0,
    speed:500,
    diff:1
  }


}

scoreCount(e){
const target=e.target;
if(target.tagName=='IMG'){
}

}

Start(){
  let arr=document.querySelectorAll('.item');
  let p=document.createElement("img");

  setInterval(() =>{
    let currentBox=Math.floor((Math.random())*6);
    arr[currentBox].appendChild(p);    
  },1000);
}




  render(){
    return (
      <div className="wrapper">
        <Field tick={this.scoreCount} start={this.Start}></Field>
        <SideBar time = {this.state.speed} diff = {this.state.diff} losetick={this.state.loseScore} wintick={this.state.winScore}></SideBar>
      </div>
    );

  }
    
}
export default App;

