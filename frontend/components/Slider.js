import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import fetch from 'isomorphic-unfetch';
import Link from "next/link";
import { Config } from '../config';

class Slider extends Component {
    state = {
        slides: []
    }

    async componentWillMount() {
        const slidesRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/slide?_embed`
        );
        const slides = await slidesRes.json();
        this.setState({
            slides
        });
    }

    render() {
        const { slides } = this.state;
        return (
            <div>
            <div className="d-none d-lg-block">
                <div className="slider-container">
                    <Carousel width="50%" height="50%">
                        {slides.map(slide => 
                            <img 
                                style={{width: '100%' }}
                                key={slide.id}
                                alt={slide.title.rendered} 
                                src={slide._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} />
                        )}
                    </Carousel>
                </div>
            </div>
            
                {this.state.slides.length !== 0 ? 
                    <div className="d-none d-sm-block d-lg-none">
                    <div className="slider-container">
                        <img className="slider-image" src={slides[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} />   
                    </div>
                        
                    </div>
                    : null }

            
           </div>
        );
    }
}

export default Slider;