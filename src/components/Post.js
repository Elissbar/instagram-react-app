import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2oHmkEONrhfLQV5XvFaLGzEv9SRW4RNMbG9xaIx707FPHajVI" 
                alt="man" 
                name="Scott"
                min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Lorem lorem lorem lorem lorem loremloremloremlorem lorem lorem lorem  
                    lorem lorem lorem lorem lorem v loremloremv lorem lorem lorem  
                    lorem vloremloremlorem lorem vloremv  loremlorem loremlorem lorem lorem
                    lorem lorem lorem 
                </div>
            </div>
        )
    }
}