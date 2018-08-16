import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { Config } from '../config';
import Layout from "../components/Layout.js";

class technologies extends Component {
    state = {
        technologies: []
    }

    async componentWillMount() {
        const technologiesRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/technologies?_embed`
        );
        const technologies = await technologiesRes.json();
        this.setState({
            technologies
        });
    }
    
    render() {
        const { technologies } = this.state;
        return (
            <Layout>
                <div className="page-container">
                    <h2>Technologies</h2>
                    <div className="row">
                    {technologies.map(tech => 
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="technology-card">
                            <img 
                                key={tech.id}
                                alt={tech.title.rendered} 
                                src={tech.acf.image.url} 
                            />
                            <h3>{tech.acf.technology_name}</h3>
                            <p>{tech.acf.technology_description}</p>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default technologies;