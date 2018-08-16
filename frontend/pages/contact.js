import React, { Component } from 'react';
import Contact from "../components/Contact";
import Layout from "../components/Layout";

class contact extends Component {
    render() {
        return (
            <Layout>
                <div className="page-container">
                    <h3>Chas Fricke</h3>
                    <p>Full Stack Web Developer</p>
                    <Contact />
                </div>
            </Layout>
        );
    }
}

export default contact;