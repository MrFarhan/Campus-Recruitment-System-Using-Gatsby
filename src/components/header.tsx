import React from "react"
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from "gatsby"

interface Menu {
  item: String,
  index: Number,
  route:string,
  Text:String
}
interface Props {
  siteTitle: String,
  data: Menu[],
}

const Header = ({ siteTitle, data }: Props) => (
  < header >
    <div >
      <Navbar bg="light" expand="lg" fixed="top"  >
        <Navbar.Brand style={{ color: "blue" }}><Link to="/">{siteTitle}</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navControlerParent" />
        <Navbar.Collapse id="basic-navbar-nav" className="navControlerChild">
          <Nav className="mr-auto">
            {data?.map((item, index) => {
              return <Link key={index} to={item["route"]} >
                &nbsp; {String(window.location.pathname) == String(item["route"]) ? <span style={{ color: "red", textDecoration: "none !important" }}>{item["Text"]}</span> : <span style={{ color: "black", textDecoration: "none" }}> {item["Text"]} </span>} &nbsp;
              </Link>
            })}
          </Nav>
          &nbsp;<Button variant="outline-dark" style={{ marginLeft: "auto", marginRight: "1em" }}>
            {/* <CgLogOut /> */}
            Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header >
)

export default Header
