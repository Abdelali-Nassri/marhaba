import React from 'react';
import {Navbar, Container, Col} from 'react-bootstrap';
class Footer extends React.Component {
   render() {
       let fullYear = new Date().getFullYear();
       return (
           <Navbar style={{backgroundColor:'#172b5a'}} variant="light">
           <Container>
           <Col lg={12} className="text-center text-muted" >
           <div>
           <h6 style={{color:'white'}}>{fullYear}-{fullYear+1}, All Rights Reserved by Abdelali Nassri</h6>
           </div>
           </Col>
           </Container>
           </Navbar>
       );
   }
}
export default Footer;
