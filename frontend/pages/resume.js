import React, { Component } from 'react';
import Layout from "../components/Layout";

class resume extends Component {
    render() {
        return (
            <Layout>
                <div className="page-container">
                    <h2>Resume</h2>
                    <iframe src="https://drive.google.com/file/d/1D9WAqaF0hgAQgjv5_JaJAHqR4NWNTKbX/preview" height="1100px" width="100%" ></iframe>
                </div>
            </Layout>
        );
    }
}

export default resume;