import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel'
import {Jumbotron,Button,InputGroup,FormControl} from 'react-bootstrap'; 

import Gallery from './Gallery';
import NavigationBar from './NavigationBar';
import './st.css';
import Back from './Back';


class Bienvenue extends React.Component { 
	render() { 
		return (
				<div> 
					<NavigationBar/>
					<Back />

							

					<br/><br/>

					
					<Gallery />

					



				</div>
				); 
			} 
} export default Bienvenue 