import React, { useContext } from "react";
import Modal from "../Modal/index";
import {User , Button,Head, Row, Col } from './SignUp'
import { Form } from "react-bootstrap";
import {AuthContext} from "../../store/AuthContext"


const Signup = () => {

    const ctx = useContext(AuthContext);
    let signup;

    signup = ctx.isSignup ? (
        <>
            <Form>
                <Head>Join SmartHub</Head>
                <Row>
                    <Form.Group controlId="formFirstName">
                        <Col>
                          <Form.Label>First Name:</Form.Label>
                          <Form.Control type="text" placeholder="Enter first name"/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formLastName">
                        <Col>
                          <Form.Label>Last Name:</Form.Label>
                          <Form.Control type="text" placeholder="Enter last name"/>
                        </Col>  
                    </Form.Group>
                </Row>

                <Row>
                  <Form.Group controlId="formGridEmail">
                      <Col>     
                       <Form.Label>Email:</Form.Label>
                       <Form.Control type="email" placeholder="Enter email"/>
                      </Col>
                  </Form.Group>
                </Row>
                
                <Row>
                    <Form.Group controlId="formGridPassword1">
                        <Col>
                          <Form.Label>Password:</Form.Label>
                          <Form.Control type="password" placeholder="Enter password"/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formGridPassword1">
                        <Col>
                          <Form.Label>Confirm Password:</Form.Label>
                          <Form.Control type="password" placeholder="Conform password"/>
                        </Col>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formGridZip">
                        <Col>
                          <Form.Label>Telephone:</Form.Label>
                          <Form.Control type="tel" placeholder="Enter phone no"/>
                        </Col>
                    </Form.Group>
                </Row>
                <Button value="submit" type="submit">
                    Sign Up
                </Button>
    
            </Form>

            <User>
                <p>
                    Existing user? <span onClick={ctx.signIn}>Sign in</span>
                </p>
            </User>
        </>
    ) : (
        <>
            <Form>
                <Head>Sign In</Head>
                <Row>
                  <Form.Group controlId="formGridEmail">
                      <Col>     
                       <Form.Label>Email:</Form.Label>
                       <Form.Control type="email" placeholder="Enter email"/>
                      </Col>
                  </Form.Group>

                  <Form.Group controlId="formGridPassword1">
                        <Col>
                          <Form.Label>Password:</Form.Label>
                          <Form.Control type="password" placeholder="Enter password"/>
                        </Col>
                    </Form.Group>

                </Row>
                <Button type="submit">
                    sign in
                </Button>
            </Form>

            <User>
                <p>
                    New user? <span onClick={ctx.signUp}>Sign up</span>
                </p>
            </User>
        </>
    );
    return (
        <div>
            <Modal
                show={ctx.show}
                toggle={ctx.toggleModal}
            >
                {signup}
            </Modal>
        </div>
    );
};

export default Signup;