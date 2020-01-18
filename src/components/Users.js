import React, { Component } from 'react';
import User from './User';
import InstaService from '../services/instaService';
import ErrorMessage from './Erroe';
import { ContextName } from '../App';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false,
        name: this.props.name
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPost()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const { photo, alt, name, id } = item;

            return (

                <User key={id} src={photo} alt={alt} name={name} min />
            )
        })
    }

    render() {
        const { error, posts } = this.state;

        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(posts);
        return (
            <div className="right">
                <ContextName.Consumer>
                    {username => (
                        <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2oHmkEONrhfLQV5XvFaLGzEv9SRW4RNMbG9xaIx707FPHajVI"
                            alt="man"
                            name={username}
                        />
                    )}
                </ContextName.Consumer>

                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }
}