import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

interface Props {
  children: ReactNode
}
const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const role = "Student"

  let studentHeaderData = [{ "Text": "Companies", "route": "/companies" }, { "Text": "All Jobs", "route": "/allJobs" }, { "Text": "Applied Jobs", "route": "/appliedJobs" }, { "Text": "Profile", "route": "/Profile" }]
  let companyHeaderData = [{ "Text": "Vacancies", "route": "/vacancies" }, { "Text": " Profile ", "route": "/profile" }]

  return (
    <>
      <Header data={role === "Student" ? studentHeaderData : companyHeaderData} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div >
        <main style={{marginTop:"5em "}}>{children}</main>
        <footer style={{ display: "flex", justifyContent: "center" }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.github.com/MrFarhan">MrFarhan</a>
        </footer>
      </div>
    </>
  )
}


export default Layout
