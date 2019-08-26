import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Field from "./Components/Field/Field";
import SideBar from "./Components/SideBar/SideBar";
import ModalWin from './Components/ModalWin/ModalWin';
import ModalLose from "./Components/ModalLose/ModalLose";







class App extends Component{

constructor(props){
  super(props)
  this.timerRandPicture = this.timerRandPicture;
  this.timerSpeed = this.timerSpeed;
  this.parag = this.parag;
  this.target = this.target;
  this.state = {
    winScore:1,
    loseScore:0,
    speed:5,
    diff:1,
    speedrandomimage:1000,
  };
  this.scoreCount = this.scoreCount.bind(this);
  this.Start = this.Start.bind(this);
  this.StartInervalImage = this.StartInervalImage.bind(this);
 
}







StopAndPlay(){
  clearInterval(this.timerRandPicture);
  clearInterval(this.timerSpeed);
  setTimeout(()=>{
    this.target.style.background = "lightblue";
    this.parag.remove();
  },100)
  setTimeout(()=>{
    this.StartInervalImage();
    this.StartInervalScore();
  },110)

}

StartInervalScore(){
  this.timerSpeed = setInterval(() =>{
    if(this.state.speed === 0){
      this.setState({
        loseScore:this.state.loseScore + 1
      });
        this.setState({
          speed: this.state.speed = 5
        });
    }
    else{
    this.setState({
      speed: this.state.speed - 1
    })
    }
  }, 1000);

}


StartInervalImage(){
  let arr=document.querySelectorAll('.item');
  this.parag=document.createElement("img");
  let uniqueRandom = require('unique-random');
  let random = uniqueRandom(0, 5);
   this.timerRandPicture  = setInterval(() =>{
    let randomNumber = random();
    arr[randomNumber].appendChild(this.parag);    
  },this.state.speedrandomimage);

}


scoreCount(e){
this.target=e.target;
if(this.target.tagName==='IMG'){
  this.setState({
    winScore: this.state.winScore + 1,
    speed: this.state.speed = 5
  });
  // this.target.style.css = "b"
  this.target.setAttribute("style", "mix-blend-mode:exclusion;");
  this.StopAndPlay();
}

else{
  this.StopAndPlay();
  this.target.style.background = "red";
  this.setState(function(state){
return {
  loseScore: state.loseScore + 1
}
  });

}

if(this.state.winScore % 10 === 0){
  this.setState({
    diff: this.state.diff + 1,
    speedrandomimage:this.state.speedrandomimage - 200

  })
  console.log(this.state.speedrandomimage);
  }
}

Start(){
  this.StartInervalScore();
  this.StartInervalImage();

}


  render(){
    if(this.state.loseScore===3){
      return <ModalLose />;;

    }
    if(this.state.winScore===100){
      return  <ModalWin />;

    }
    return (
      <div>
      <div className="wrapper">
        <Field tick={this.scoreCount} start={this.Start}></Field>
        <SideBar time={this.state.speed} diff={this.state.diff} losetick={this.state.loseScore} wintick={this.state.winScore}></SideBar>
      </div>
      </div>
    );

  }
    
}
export default App;

