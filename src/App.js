import React from "react"
import ReactDOM from "react-dom/client"
import style from "./style.css"
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Sale_Image from "./components/Sale_Image"
import Recommended from "./components/Recommended"
import Topics from "./components/Topics"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

function App()
{
    return(
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Sale_Image></Sale_Image>
            <Recommended></Recommended>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    );
}


export default App;