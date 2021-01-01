// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// import Primary from 'react-bootstrap/'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function App() {
  return (
    <div className ="App">
        <Card>
            <Card.Img></Card.Img>
            <Card.Body>
                <Card.Title>Code for Chico</Card.Title>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <p>We are looking for volunteers who want to contribute to Code for Chico projects.</p>
            </Card.Body>
        </Card>
        <Card>
            <Card.Title>Become a Volunteer</Card.Title>
            <Card.Body>
                <p>If you are just learning or have years of experience we need your help to build good things together.</p>
                <p>See how you can help</p>
                <Button variant = "outline-primary">Volunteer</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Title>Become a Comunity Partner</Card.Title>
            <Card.Body>
                <p>We work with Community Organizations and Local Governments to fix local services, and utilize open data to increase community awareness.</p>
                <Button varint = "outline-primary">Join Us</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default App;
