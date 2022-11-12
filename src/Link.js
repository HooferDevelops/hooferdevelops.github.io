import React from "react";

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.href} className={this.props.className}>
                <i className={`${this.props.icon} icon`}></i> 
                {this.props.name} 
                <i className="fa-solid fa-arrow-up-right-from-square external"></i>
            </a>
        );
    }
}

export default Link;