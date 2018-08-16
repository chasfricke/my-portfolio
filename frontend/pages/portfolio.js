import React, { Component } from 'react';
import Portfolio from "../components/Portfolio";
import Layout from "../components/Layout.js";

class portfolio extends Component {
    render() {
        return (
            <Layout>
                <div className="page-container">
                    <h2>Portfolio Projects</h2>
                    <Portfolio />
                </div>
            </Layout>
        );
    }
}

export default portfolio;
