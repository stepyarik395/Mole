import React,{Component} from 'react';





 class SideBar extends Component{
    constructor(props){
        super(props);
    }

    loda(){
    }


    render(){
        return(
            <div className="wrapper__side__bar">
                <h2>Status Bar</h2>
                <span>Game Difficult &nbsp;{this.props.diff}</span>
                <span>Score &nbsp; {this.loda}/100</span>
                <span>You falied: &nbsp;{this.props.losetick} </span>
                <span>Time:&nbsp;{this.props.time}&nbsp;мс</span>
                </div>
        );

    }

       
}
export default SideBar;
