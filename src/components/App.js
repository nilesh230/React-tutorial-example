import React from "react"
import Header from "./Header"
import Content from "./Content"
import HeaderNextBar from "./HeaderNextBar"
import Footer from "./Footer"


function App() {

    return (

        <div className="container">
            <Header />
            <HeaderNextBar />
            <Content />
            <Footer />
        </div>  
        )   
}

export default App