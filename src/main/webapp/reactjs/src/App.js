import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { Container, Row, Col,Jumbotron } from 'react-bootstrap';
import Bienvenue from './Components/Bienvenue';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavigationBar';
import Api from './Components/Api';



function App() {
	
  
  const background = {background:"white"};

  return ( <Router >
  				
  				<NavigationBar/>
        				<Switch> 
        					<Route path="/" exact component={Bienvenue}/> 
        					<Route path="/api" exact component={Api}/> 
							<Route path="/edit/:id" exact component={Api}/>
        			
        				</Switch>
        			
        		<Footer/>				
  			</Router>);}

export default App;
