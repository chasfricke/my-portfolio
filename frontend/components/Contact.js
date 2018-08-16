import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from "next/link";
import { Config } from '../config';

class Contact extends Component {
    state = {
        contacts: []
    }

    async componentWillMount() {
        const contactRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/contact_info?_embed`
        );
        const contacts = await contactRes.json();
        this.setState({
            contacts
        });
    }


    render() {
        const { contacts } = this.state;
        return (

            <div>
                <div>
                    {contacts.map(contact => 
                        <div>
                            <div>{contact.acf.phone_number}</div>
                            <div>{contact.acf.email_address}</div>
                            <a href={contact.acf.linkedin_url} target="blank">{contact.acf.linkedin_url}</a>
                            <br/>
                            <a href={contact.acf.github_url} target="blank">{contact.acf.github_url}</a>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Contact;