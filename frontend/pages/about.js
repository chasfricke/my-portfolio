import React, { Component } from 'react';
import Slider from "../components/Slider";
import Layout from "../components/Layout";
import { Config } from "../config.js";

class about extends Component {
    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=about`
        );
        const page = await pageRes.json();
        return { page };
    }
    render() {
        return (
            <Layout>
                <div className="page-container">
                    <h2>About</h2>
                    <Slider />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: this.props.page.content.rendered
                        }}
                    />   
                </div>
            </Layout>
        );
    }
}

export default about;