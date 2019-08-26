import React,{Component} from 'react';
import Mole from './Mole';






 class Field extends Component{
	constructor(props){
		super(props);
	}


	




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
