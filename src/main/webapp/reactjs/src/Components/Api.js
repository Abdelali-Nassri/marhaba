import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Col,Row,Container , Button,Image} from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import {Grid,CardContent,Card,CardMedia} from '@material-ui/core';
import './background.css';
import a3 from '../images/a3.gif';
import log from '../images/log.png';
import Steeps from './Steeps';
export default class Api extends Component{
  
  render(){
	return(
			<div>
				
				<Row style={{height:'100vh'}}>
					<Col sm={6} style={{display: 'block',margin:'auto',textAlign:"center"}} >
						<h1 style={{color:'#1f72fc',fontSize:'50px',fontWeight: 'bold'}}>Le moteur photo le plus puissant au Maroc.</h1>
						<br/>
						<h3 style={{fontSize:'20px'}}>Bienvenue dans l'API officielle Marhaba. la plus puissantte collection ouverte de photos et d'informations sur les villes maroccaines.</h3>
						<br/>
						<Alert variant="secondary" style={{margin:'25px'}}>
							Intéressé par l'utilisation de l'API Marhaba dans vos applications ?
						</Alert>
					</Col>
					<Col sm={6} style={{display: 'block',margin:'auto'}}>
						<Image src={a3} className="grid-img" thumbnail />
					</Col>
				</Row>
				<Row style={{}}>
					
					<Col sm={6} style={{display: 'block',margin:'auto'}}>
						<Steeps />
					</Col>
					<Col sm={6} style={{display: 'block',margin:'auto',textAlign:"center"}} >
						<h1 style={{color:'#1f72fc',fontSize:'50px',fontWeight: 'bold'}}>Integration simple</h1>
						<br/>
						<h3 style={{fontSize:'20px'}}>L'API Marhaba est une API JSON moderne qui présente toutes les informations sur les villes maroccaines dont vous aurez besoin pour créer une expérience pour vos utilisateurs.</h3>
						<br/>
						<Image src={log} className="grid-img2" thumbnail />
						<Alert variant="warning" style={{margin:'25px'}}>
							Toutes les photos sont générés depuis Unsplash.com.
						</Alert>
						
					</Col>
				</Row>
			
			
			</div>
      	);
      	}
    	}
