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
    render(){

        return(
            <div className="App">
                <Navigation 
                    onSubmit = {this.handleSubmit}
                />
                <VolunteerCard />
                <ComunityPartnerCard />
            </div>
        );
    }
}

class Navigation extends React.Component{

    render(){
        return(
            <div className ="Nav">
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
                    <VolunteerButton label="Volunteer" />
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
                <VolunteerButton label ='Join Us'/>
            </Card.Body>
        </Card>
        );
    }
}


class VolunteerButton extends React.Component{
    render(){
        return(
            <Button 
                variant = "basic"
                onClick = {function() {alert('Thank you for your interest! Please come back soon we are still building this site!')}}
                >
            {this.props.label}
            </Button>
        )
    }
}


export default App;