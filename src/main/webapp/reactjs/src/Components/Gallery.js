import React from 'react';
import Lightbox  from 'react-images';
import { Jumbotron, Col ,Row ,Button,Form,Image,Modal, Container} from 'react-bootstrap';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {GridList,GridListTile,GridListTileBar,ButtonGroup} from '@material-ui/core';
import mediumZoom from 'medium-zoom';
import {Loader} from './Loader';
import Infos from './Infos';
import InfiniteScroll from 'react-infinite-scroll-component';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { Hint } from 'react-autocomplete-hint';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './gallery.css';
export default class Gallery extends React.Component {



 constructor(props) {
    	super(props);
		this.state = {img:'',show:false, image: "" ,number:5,photos: ["g"],infos: [],noms: [],choix1:false,choix2:false,maps:""};
		
		
	}
	handleClose = () => this.setState({show:false});

  	handleShow = (imgg) => {this.setState({show:true});this.change(imgg)};
	change = (imgg) => {this.setState({img:imgg})}

	onClickOutside = (e) => {
    if (e.target.localName !== "button") {
      this.setState({displayModal:false});
    }
  };

 settrue = () =>{this.setState({choix2:true});console.log(this.state.choix2)}
 setfalse = () =>{this.setState({choix2:false});this.forceUpdate();console.log(this.state.choix2)}


  
   handleChange = (event,value)=> {
      this.setState({
        image: value
    })
  this.setState({number:5});
};
refresh = () => {
	
	this.setState({number:this.state.number + 5});
	setTimeout(() => {
  this.handleSubmit()
}, 2000);
	}
handleSubmit = () => {
console.log(this.state.image);
const url = "http://localhost:8080/api/villes/photos/"+this.state.image+"?nombre="+this.state.number;
const url2 = "http://localhost:8080/api/villes/infos/"+this.state.image;
const url3 = "http://localhost:8080/api/villes/noms";

axios.get(url).then((response) => {
this.setState({photos:response.data.results});
});
if(!this.state.image==""){
axios.get(url2).then((response) => {
this.setState({infos:response.data});
this.setState({choix1:true})
this.setState({maps:"https://maps.google.com/maps?q="+this.state.image+"&t=&z=5&ie=UTF8&iwloc=&output=embed"})
});}

axios.get(url3).then((response) => {
this.setState({noms:response.data});
});


}; 


  render(){
    return(
		
		<div className="App" >
			<Container >
        		<Row>
					<Col>
						<Jumbotron className=" text-white" style={{background:'RGB(23, 43, 90)', }}>
							<div className="">
								<h3>Explorer les villes maroccaines</h3>
							</div>
							
							<Form className="d-flex form" >
								<Autocomplete
									className="tfield" id="full-width " 
									 style={{background: 'white',marginRight:'5px',borderRadius:'40px 7px 7px 40px',padding:'15px',paddingTop:'5px'}}
									freeSolo
									onInputChange={this.handleChange}
									options={this.state.noms.map((option) => option.nom)}
									renderInput={(params) => (
									<TextField {...params} label="Ville de Maroc"  onInputChange={this.handleChange} variant="standard"  name="image" />
									)}
								/>
								<Button className="btn" style={{background: '#ffbd59',borderRadius:'7px 40px 40px 7px',width:'10%'}} onClick={this.handleSubmit}>
									<SearchIcon/>
								</Button>
							</Form>
						</Jumbotron>
						{this.state.choix1?
						<ButtonGroup size="large" aria-label=" button group" style={{marginBottom :"25px",width:'40%'}}>
							{this.state.choix2?<Button onClick={this.setfalse}  className="btn" style={{background: 'RGB(23, 43, 90)',borderRadius:'40px 7px 7px 40px',width:'50%',marginRight:"10px"}} >Images</Button>:<Button onClick={this.setfalse} disabled  className="btn" style={{background: 'RGB(23, 43, 90)',borderRadius:'40px 7px 7px 40px',width:'50%',marginRight:"10px"}} >Images</Button>}
							{this.state.choix2?<Button disabled onClick={this.settrue}  className="btn" style={{background: 'RGB(23, 43, 90)',borderRadius:'7px 40px 40px 7px',width:'50%',marginRight:"10px"}} >Infos</Button>:<Button onClick={this.settrue}   className="btn" style={{background: 'RGB(23, 43, 90)',borderRadius:'7px 40px 40px 7px',width:'50%',marginRight:"10px"}} >Infos</Button>}
						</ButtonGroup>
						:''}
						{this.state.choix2?
						<Container style={{marginBottom:'20px'}}>
						<Row className=" text-white"  style={{background:'#aadaff', height:'100vh'}}>
							
								
										
									<Col xs={6} >
										<Infos infos={this.state.infos}/>
									</Col>
									<Col xs={6}>
										 
										<iframe width="103%"  id="gmap_canvas" src={this.state.maps}  scrolling="no" style={{height:'100%',border:'none'}}></iframe>
									</Col>
							
							
						</Row></Container>
						:
						{... this.state.photos.length>0?
						<InfiniteScroll
							dataLength={this.state.photos.length}
							next={this.refresh}
							hasMore={true}
							loader={<Loader />}
						>
							<GridList cellHeight={300} cols={3} >
								{this.state.photos.map((image) => (
								<GridListTile className="ok" style={{ flexGrow : '1'}} cols={(image.width /1200/2).toFixed(0)}>
									
										<img src={image.url} alt={image.title} className="ok" onClick={() => {this.setState({show:true});this.change(image.url)}}/>
										<GridListTileBar subtitle={image.description} title={image.user}/>
									<Modal size="lg" centered show={this.state.show} onHide={this.handleClose} id={image.description}>
										
										<Modal.Body ><Image fluid src={this.state.img}   onClick={this.handleClose}/></Modal.Body>
									
									</Modal>
								</GridListTile>
								
								))}
							</GridList>
						</InfiniteScroll>
						: <h4>Oops! Aucun résultat</h4>}
					}


			
				

					</Col>
    		
				</Row>	
			</Container>					



		</div>
		


    )
  }
}









