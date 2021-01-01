// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// import Primary from 'react-bootstrap/'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
            <Card.Header>Become a Volunteer</Card.Header>
            <Card.Body>
                <p>If you are just learning or have years of experience we need your help to build good things together.</p>
                <p>See how you can help</p>
                <Button variant = "basic">Volunteer</Button>
            </Card.Body>
        </Card>
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
    </div>
  );
}

export default App;
