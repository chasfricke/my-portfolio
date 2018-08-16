import React, { Component } from 'react';
import Link from "next/link";

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { activeTabClassName: "" }
    }

    componentDidMount() {
        this.setState({activeTabClassName: window.location.pathname})
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                  {this.state.activeTabClassName !== "/" ? 
                    <div>
                        <a className="navbar-brand" href="/">Chas B. Fricke</a>
                    </div>
                    : null }
                
                <div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <a className={(this.state.activeTabClassName === "/") ? "nav-link active" : "nav-link"}>Home</a>
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link href="/about">
                                <a className={(this.state.activeTabClassName === "/about") ? "nav-link active" : "nav-link"}>About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/portfolio">
                                <a className={(this.state.activeTabClassName === "/portfolio") ? "nav-link active" : "nav-link"}>Portfolio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/technologies">
                                <a className={(this.state.activeTabClassName === "/technologies") ? "nav-link active" : "nav-link"}>Tech</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/resume">
                                <a className={(this.state.activeTabClassName === "/resume") ? "nav-link active" : "nav-link"}>Resume</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className={(this.state.activeTabClassName === "/contact") ? "nav-link active" : "nav-link"}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;