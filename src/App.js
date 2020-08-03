import React from "react"
import "./App.css"
import Nav from "./components/Nav/Nav"
import SubNav from "./components/subNav/SubNav"

function App() {
  return (
    <div>
      <Nav />
      <SubNav />
      <p style={{ textAlign: "center", paddingTop: "3rem" }}> by Bruno Paula</p>
    </div>
  )
}

export default App
