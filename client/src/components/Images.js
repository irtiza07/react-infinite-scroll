import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import Image from './Image';
const uuidv4 = require('uuid/v4');


export class Images extends Component {
    state = {
        images: [],
        count: 30,
        start: 1
    };

    componentDidMount() {
        const { count, start } = this.state;
        axios.get(`/api/photos?count=${count}&start=${start}`)
            .then(res => this.setState({ images: res.data }));
    }

    fetchImages = () => {
        const { count, start } = this.state;
        this.setState({ start : start + count});
        console.log(`Fetching images from ${this.state.start}`)
        axios.get(`/api/photos?count=${count}&start=${start}`)
            .then(res => this.setState({ images: this.state.images.concat(res.data) }));
    }

    render() {
        return (
        <div>
            <InfiniteScroll
                hasMore={true}
                loader={<h4> Loading... </h4>}
                initialLoad={false}
                loadMore={this.fetchImages}
            >
            {this.state.images.map(image => (
                <Image key={uuidv4()} image={image}></Image>
            ))};

            </InfiniteScroll>
        </div>
        )
    }
}

export default Images
