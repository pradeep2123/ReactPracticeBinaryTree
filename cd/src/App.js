import React, {Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import serialize from "./components/serializer";
import deserializer from "./components/deserializer";
import Tree from "./components/Tree";

export default class App extends React.Component{
    state={
        Tree:null,
        serialize:null,
        deserializer:null,
        val:[1,2,3,4]
    }
    createNode = ()=>{
        this.setState(Tree(this.state.val))
    }
    handleClickSerialize = buttonName => {
        this.setState(serialize(this.state, buttonName));
    };
    handleClickDeserialize =  button =>{
        this.setState(deserializer(this.state,button))
    }

    render(){
        return(
            <div className="container">
                <h2>BINARY TO SERIALIZE and DESERIALIZE</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button onClick={this.createNode}>createNode</button>;
                    <button onClick = {this.handleClickSerialize}>Serialize </button>
                    <button onClick = {this.handleClickDeserialize}>Deserialize</button>
                </nav>
            </div>
        );
    }
}


