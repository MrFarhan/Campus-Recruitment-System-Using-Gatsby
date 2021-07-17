import * as React from "react"
import { Link } from "gatsby"
import { Button, Form, InputGroup } from 'react-bootstrap'


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="LoginMain" >
      <Form style={{ width: "430px" }} >
        {/* <img src={} className="compLogo" alt="Logo" /> */}
        <Form.Group >
          <Form.Label className="labels" htmlFor="email">Email</Form.Label>
          <Form.Control id="email" type="email" placeholder="Enter email" autoFocus />
        </Form.Group>

        <Form.Group >
          <Form.Label className="labels">Password</Form.Label>
          <InputGroup.Prepend>
            <Form.Control id="password" type="password" placeholder="Password" />
          </InputGroup.Prepend>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" >  Login</Button>
        <Button variant="link">  <Link to="/Signup">Don't have an account ?</Link></Button>
      </Form>
    </div>
  </Layout>
)

export default IndexPage
