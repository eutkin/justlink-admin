import React, {Component} from 'react';
import './App.css';
import RedirectScreen from "./containers/RedirectScreen";
import {Container, Row, Col} from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <Container fluid>
                <div className="App">
                    <Row>
                        <Col>
                            <RedirectScreen/>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default App;
