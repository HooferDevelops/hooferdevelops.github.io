import "./Card.scss";

import React from 'react';

class Card extends React.Component {
    render() {
        return (
        <div className="card">
            <div className="content">
                <img src={this.props
                .img} alt="Avatar" />
                <div className="container">
                    <h4><b className="name">{this.props.name}</b> <span className="alias">{this.props.alias ? `aka ${this.props.alias}` : ""}</span></h4>
                    <p className="info">{this.props.title}</p>
                </div>
            </div>
        </div>
        );
    }
}

export default Card;