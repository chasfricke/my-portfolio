import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { Config } from "../config.js";
import NavBar from "./NavBar";
import stylesheet from '../src/styles/style.scss'

const linkStyle = {
    marginRight: 30
};

class Header extends Component {
    constructor() {
        super();
        this.state=({activeTabClassName: null})
    }

    componentDidMount() {
        this.setState({activeTabClassName: window.location.pathname})
    }

    render() {

        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                    <title>
                        Chas B. Fricke
                    </title>
                </Head>
                <header>
                    <NavBar />
                </header>
                {this.state.activeTabClassName == "/" ? 
                    <hr></hr>
                    : null }

                
            </div>
        );
    }
}

export default Header;
