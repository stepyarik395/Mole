import React, { Component } from 'react';
import './App.css';
import Field from "./Components/Field/Field";
import SideBar from "./Components/SideBar/SideBar";
import ModalWin from './Components/ModalWin/ModalWin';
import ModalLose from "./Components/ModalLose/ModalLose";
import ModalStart from "./Components/ModalStart/ModalStart";
class App extends Component{
constructor(props){
  super(props)
  this.timerRandPicture = this.timerRandPicture;
  this.timerSpeed = this.timerSpeed;
  this.createTag = this.createTag;
  this.target = this.target;
  this.state = {
    winScore:1,
    loseScore:0,
    speed:5,
    diff:1,
    speedRandomImage:1000,
    modal:true
  };
  this.scoreCount = this.scoreCount.bind(this);
  this.Start = this.Start.bind(this);
  this.StartInervalImage = this.StartInervalImage.bind(this);
  this.cathEnter = this.cathEnter.bind(this);
 
}
cathEnter(e){
  if(e.keyCode === 13){
    this.setState({
      modal:!this.state.modal
    })
    setTimeout(()=>{
      this.Start();
      window.removeEventListener('keyup',this.cathEnter);
        },200)
  }
}
componentDidMount(){
 window.addEventListener('keyup',this.cathEnter);
}



StopAndPlay(){
  clearInterval(this.timerRandPicture);
  clearInterval(this.timerSpeed);
  setTimeout(()=>{
    this.target.style.background = "lightblue";
    this.createTag.remove();
    this.StartInervalImage();
    this.StartInervalScore();
  },200)

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
  this.createTag=document.createElement("img");
  let uniqueRandom = require('unique-random');
  let random = uniqueRandom(0, 5);
   this.timerRandPicture  = setInterval(() =>{
    let randomNumber = random();
    arr[randomNumber].appendChild(this.createTag);    
  },this.state.speedRandomImage);

}
scoreCount(e){
  this.target=e.target;
    if(this.target.tagName==='IMG'){
      this.setState({
      winScore: this.state.winScore + 1,
      speed: this.state.speed = 5
  });
  this.target.setAttribute("style", "mix-blend-mode:exclusion;");
  this.StopAndPlay();
}
else{
  this.StopAndPlay();
  this.target.style.background = "red";
  this.setState(function(state){
return {
  loseScore: state.loseScore + 1,
  speed:this.state.speed = 5
}
  });

}
if(this.state.winScore % 10 === 0){
  this.setState({
    diff: this.state.diff + 1,
    speedRandomImage:this.state.speedRandomImage - 50

  })
  console.log(this.state.speedRandomImage);
  }
}
Start(){
  this.StartInervalScore();
  this.StartInervalImage();
}
  render(){
    if(this.state.loseScore === 3 ||this.state.winScore === 100 ){
      clearInterval(this.timerSpeed);
      clearInterval(this.timerRandPicture);
    }
    
    return (
      <div>
        <div className="wrapper">
          {this.state.modal ? <ModalStart /> : null}
          {this.state.loseScore === 3 ? <ModalLose /> : null}
          {this.state.winScore === 100 ? <ModalWin /> : null}
        <Field tick={this.scoreCount} start={this.Start}></Field>
        <SideBar time={this.state.speed} diff={this.state.diff} losetick={this.state.loseScore} wintick={this.state.winScore}></SideBar>
      </div>
      </div>
    );

  }  
}
export default App;

