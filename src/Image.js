import React from "react";
import "./Image.scss";

import Spinner from "./Spinner";

class Image extends React.Component {
    constructor() {
        super();

        this.state = {
            loaded: false,
            spoilered: true
        }
    }

    render() {
        return (
            <div 
                className="image" 
                style={{width: this.state.loaded ? null : 100, height: this.state.loaded ? null : 100}} 
                onMouseEnter={() => this.setState({spoilered: false})} 
                onMouseLeave={() => this.setState({spoilered: true})}
            >
                <img 
                    className={this.state.spoilered ? "spoilered" : null} 
                    style={{display: this.state.loaded ? "initial" : "none"}} 
                    src={this.props.src} onLoad={() => this.setState({loaded: true})}
                    alt={this.props.alt}
                />
                {!this.state.loaded && <Spinner />}
            </div>
        );
  }
}

export default Image;