import React, { useContext } from "react";
import Modal from "../Modal/index";
import {User , Button,Head } from './SignUp'
import { Form, Col } from "react-bootstrap";
import {AuthContext} from "../../store/AuthContext"


const Signup = () => {

    const ctx = useContext(AuthContext);
    let signup;

    signup = ctx.isSignup ? (
        <>
            <Form>
                <Head>Join SmartHub</Head>
                <Form.Row className="mb-3">
                    <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name"/>
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword1">
                        <Form.Label>Enter Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword1">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control type="password" placeholder="Conform password"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Telephone:</Form.Label>
                        <Form.Control type="tel" placeholder="Enter phone no"/>
                    </Form.Group>
                </Form.Row>
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
                <h1>Sign In</h1>
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Email"/>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword1">
                        <Form.Label>Enter Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"/>
                    </Form.Group>
                </Form.Row>
    
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