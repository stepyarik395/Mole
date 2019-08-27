import React,{Component} from 'react';

 class Field extends Component{
    render(){
    	return(
      	<div>
        	<div className="wrapper__field">
          	<div onClick={this.props.tick} className="item"></div>
            <div onClick={this.props.tick} className="item"></div>
            <div onClick={this.props.tick} className="item"></div>
            <div onClick={this.props.tick} className="item"></div>
            <div onClick={this.props.tick} className="item"></div>
            <div onClick={this.props.tick} className="item"></div>
          </div>
      </div>

            
    );

    }
        
}
export default Field;
