import React from 'react';
// import ReactDOM, { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import App from './App working_keepsafe';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            page: 'home'
        }
    }
    render(){
        const page= this.state.page;

        return(
                <Navigation />,
                <VolunteerCard />,
                <ComunityPartnerCard />
            
        );
    }
}

class Navigation extends React.Component{
    render(){
        return(
            <div className ="App">
                <Card>
                    <Card.Img></Card.Img>
                    <Card.Body>
                        <Card.Title>Code for Chico</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

class VolunteerCard extends React.Component{
    render(){
        return(
            <Card>
                <Card.Header>Become a Volunteer</Card.Header>
                <Card.Body>
                    <p>If you are just learning or have years of experience we need your help to build good things together.</p>
                    <p>See how you can help</p>
                    <Button variant = "basic">Volunteer</Button>
                </Card.Body>
            </Card>
        );
    }
}
class ComunityPartnerCard extends React.Component{
    render(){
        return(
        <Card>
            <Card.Header>Become a Comunity Partner</Card.Header>
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col>We work with</Col>
                    </Row>
                    <Row>
                        <Col>Community Organizations</Col>
                        <Col>Local Governments</Col>
                        <Col>Volunteers</Col>
                    </Row>
                    <Row>To fix local services, utilize open data, to increase community awareness
                         and to look for creative solutions to challenging problems.
                    </Row>
                </Container>
                <Button variant = "basic">Join Us</Button>
            </Card.Body>
        </Card>
        );
    }
}
 
export default App;