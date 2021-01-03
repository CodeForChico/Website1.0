import React from 'react';
// import ReactDOM, { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

// firebase imports

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

//initialize firebase  app
var firebaseConfig = {
    apiKey: "AIzaSyCQNv6m_TGkSoOdnUNOR6dFPANcW84BZr8",
    authDomain: "codeforchico.firebaseapp.com",
    databaseURL: "https://codeforchico.firebaseio.com",
    projectId: "codeforchico",
    storageBucket: "codeforchico.appspot.com",
    messagingSenderId: "796780063844",
    appId: "1:796780063844:web:23fdaa49a727d2ccaf8371",
    measurementId: "G-ZJ49GTHPXX"
    };

firebase.initializeApp(firebaseConfig)
var database = firebase.database()

console.log(database.rows)

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            page: 'home'
        }
    }

    handleClickVolunteer(){
        console.log('ive been clicked')
        this.setState({page: 'volunteerForm'})
    }

    handleClickComunityPartner(){
        console.log('ive been clicked')
        this.setState({page: 'comunityPartnerForm'})
    }

    handleClickHome(){
        this.setState({page:"home"})
    }

    // handleVolenteerSubmit(){
    //     this.setState({page:"postSubmit"})
    //     // console.log('Volunteer Form Submitted')
    //     console.log()
    // }

    render(){
        const page = this.state.page
        let display
        //here, in the render statement of the App class
        //we can use a case statement on the state - in this case i will use
        //a state called page to keep of the navigation alogy through the app

        switch(page){
            case 'home':
                display =
                <div>
                    <VolunteerForm />
                        {/* onSubmit = {()=>this.handleVolenteerSubmit()}/> */}
                    {/* <Navigation 
                        page = {this.state.page}/>
                    <VolunteerCard 
                        onClick = {()=>this.handleClickVolunteer()} />
                    <ComunityPartnerCard 
                        onClick = {()=>this.handleClickComunityPartner()} /> */}
                </div>
            break;
            case 'volunteerForm':
                display =
                <div>
                    <Navigation 
                        onClick = {()=>this.handleClickHome()}/>
                    <p>Volunteer Form coming soon!</p>
                    <VolunteerForm />
                </div>
            break;
            case 'comunityPartnerForm':
                display =
                <div>
                    <Navigation 
                        onClick={()=>this.handleClickHome()}/>
                    <p>Comunity Parnter Form coming soon!</p>
                </div>
            break;
            case 'postSubmit':
                display =
                <div>
                    <Navigation 
                        onClick={()=>this.handleClickHome()}/>
                    <p>Thank you for your interest! We will be in touch soon!</p>
                </div>
            break;
            default:
                <div>
                    <Navigation 
                    onClick={()=>this.handleClickHome()}/>
                    <div>Something has gone wrong: default case</div>
                </div>
            }

        return(
            <div className="App">
                {display}
            </div>
        )


    }
}

class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.state={   
        }
    }
    render(){
        let page, nav
        
        page = this.props.page
        switch(page){
            case 'home':
            nav = 
                <div className ="Nav">
                    <Card>
                        <Card.Body>
                            <Card.Title>Code for Chico</Card.Title>
                            </Card.Body>
                    </Card>
                </div>
            break;
            default:
            nav =
                <div className ="Nav">
                    <Card>
                        <Card.Body>
                            <Card.Title>Code for Chico</Card.Title>
                            <Button
                                variant = 'basic'
                                onClick = {()=>this.props.onClick()}
                            >Home</Button>
                        </Card.Body>
                    </Card>
                </div>
            }

            return(nav)  
        }
}

class VolunteerCard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <Card>
                <Card.Header>Become a Volunteer</Card.Header>
                <Card.Body>
                    <p>If you are just learning or have years of experience we need your help to build good things together.</p>
                    <p>See how you can help</p>
                    <VolunteerButton 
                        label="Volunteer" 
                        onClick= {()=>this.props.onClick()}
                    />
                </Card.Body>
            </Card>
        );
    }
}

class ComunityPartnerCard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
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
                <VolunteerButton 
                    label ='Join Us'
                    onClick = {()=>this.props.onClick()}
                />
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
                // onClick = {function() {alert('Thank you for your interest! Please come back soon we are still building this site!')}}
                onClick = {()=>this.props.onClick()}
                >
            {this.props.label}
            </Button>
        )
    }
}

class VolunteerForm extends React.Component{
    constructor(props) {
        super(props)
        this.state={firstName: ''}
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.state.firstName = this.state.firstName.bind(this)

        this.handleChage = this.handleChage.bind(this)

        this.testFirebase = this.testFirebase.bind(this)
    }
   
    handleChage(event){
        let value = event.target.value
        this.setState({firstName: value})
        console.log(this.state.firstName)
    }

    handleSubmit(){
        // event.preventDefault()
        console.log('VolunteerForm.handleSubmit')
        console.log('FirstName ' + this.state.firstName)
    }

    testFirebase(){
        // console.log('test firebase!')
        console.log(this.state.firstName)
        database.ref('responses/').set({
            firstName: this.state.firstName
        })

    }

    render(){
        const firstName = this.state.firstName

        return(
            // <Container>
                <Form 
                    onSubmit={
                        ()=> this.handleSubmit    
                        // ()=> this.props.onSubmit()
                        }
                > 
                    <Form.Group>
                        <Form.Label>How do you wa to help?</Form.Label>
                        <Form.Control as='select'>
                            <option>Volunteer</option>
                            <option>Comunity Partner</option>
                        </Form.Control>
                    </Form.Group>
                    <Row>
                        <Col>
                            {/* <Form.Group>
                                <Form.Label>First Name</Form.Label> */}
                                <Form.Control 
                                    type='text' 
                                    placeholder='First Name'
                                    onChange={this.handleChage}
                                    value={firstName}
                                />
                                {/* <Form.Text onChange={this.handleChange}> </Form.Text>
                            </Form.Group> */}
                        </Col>
                        {/* <Col>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' placeholder='Last Name'></Form.Control>
                                <Form.Text></Form.Text>
                            </Form.Group>
                        </Col> */}
                    </Row>
                    <Row>
                        <Button
                            variant='basic'
                            onClick={this.testFirebase}
                        >
                            Test Firebase
                        </Button>
                    </Row>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='your.email@domain.com'></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type='phone' placeholder='(777) 123-4444'></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tell us about yourself?</Form.Label>
                        <Form.Control as='textarea' rows={3}></Form.Control>
                    </Form.Group>
                    <Button
                        type='submit' 
                        variant='basic'
                        >
                        Submit
                    </Button>
                </Form>
            // </Container>
        )
    }
}

export default App;