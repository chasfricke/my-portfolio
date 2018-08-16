import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { Config } from "../config.js";


const headerImageStyle = {
    marginTop: 50,
    marginBottom: 50
};

class Index extends Component {
    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=landing-page`
        );
        const page = await pageRes.json();
        return { page };
    }

    render() {
        return (
            <Layout {...this.props}>
                <div className="landing-page-body">
                    <h1 className="landing-page-name">CHAS B. FRICKE</h1>
                    <div className="line"></div>
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

export default Index;
