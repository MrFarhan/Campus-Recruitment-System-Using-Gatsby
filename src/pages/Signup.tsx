import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from "gatsby"
import "../styles/Signup.scss"
import Layout from '../components/layout';



const Signup = () => {
    return (
        <Layout>
            <div className="SignupMain">
                <Form  >
                    <Form.Group>
                        <Form.Label className="labels" htmlFor="fullName">Full Name</Form.Label>
                        <Form.Control id="fullName" type="text" placeholder="Enter Your Name" autoFocus />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="labels" htmlFor="email">Email address</Form.Label>
                        <Form.Control id="email" type="email" placeholder="Enter Email Address" />
                    </Form.Group>

                    <Form.Group style={{ display: "flex" }}  >
                        <Form.Label style={{ marginRight: "1rem" }}>
                            Signup as
                        </Form.Label>
                        <Form.Check style={{ justifyContent: "flex-start" }}
                            type="radio"
                            label="Student"
                            name="radioType"
                            id="Student"
                            value="Student"
                        />
                        <Form.Check style={{ marginLeft: "1rem" }}
                            type="radio"
                            label="Company"
                            name="radioType"
                            id="Company"
                            value="Company"
                        />
                        <div>
                            <br />
                        </div>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="labels">Password</Form.Label>
                        <Form.Control id="password" type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="labels">Confirm Password</Form.Label>
                        <Form.Control id="confirmPassword" type="password" placeholder="confirm Password" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check style={{ display: "flex", marginTop: "0.199rem" }} type="checkbox" label="I hereby agree all terms of services " />
                    </Form.Group>

                    <Button variant="primary" type="submit" > Sign up</Button>
                    <Button variant="link" type="button" ><Link to="/">Already have an account ?</Link></Button>
                </Form>
            </div>
        </Layout>

    );
}

export default Signup
