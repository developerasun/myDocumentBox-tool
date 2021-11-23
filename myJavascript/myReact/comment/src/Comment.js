import React from 'react';
import './Comment.css';
import avatar from "./avatar.png";

class Comment extends React.Component {
    // render method should have a return statement
    render() {
        return (
        <div>
            <div className="comment">
                <div className="entity">
                    <img id="avatar" src={avatar} alt="default avatar"/> 
                    <div className="text-group">
                        <h1 class="username">{this.props.name}</h1>
                        <p className="content">{this.props.content}</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Comment; 