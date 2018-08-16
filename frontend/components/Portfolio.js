import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from "next/link";
import { Config } from '../config';

class Portfolio extends Component {
    state = {
        projects: []
    }

    async componentWillMount() {
        const projectRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/portfolio-project?_embed`
        );
        const projects = await projectRes.json();
        this.setState({
            projects
        });
    }

    render() {
        const { projects } = this.state;
        return (
            <div>
                {projects.map(project => 
                    <div className="project-container">
                        <img 
                            key={project.id}
                            alt={project.title.rendered} 
                            src={project._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} 
                        />
                        <h4>{project.acf.project_title}</h4>
                        <p><span>Technologies:</span> {project.acf.technologies}</p>
                        <p><span>Description: </span>{project.acf.application_description}</p>
                        <div className="links">
                            <a href={project.acf.live_link} target="_blank">Live Link</a>
                            <a href={project.acf.github_link} target="_blank">GitHub Link</a>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Portfolio;