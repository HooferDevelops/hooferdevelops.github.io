import React from "react";

class Link extends React.Component {
    constructor() {
        super();
        this.state = {
            textlerp: 0
        };
    }

    mouseEnter = () => {
        if (this.increment) {
            clearInterval(this.increment);
        }
        
        this.increment = setInterval(() => {
            this.setState({textlerp: this.state.textlerp + 0.1});

            if (this.state.textlerp >= 1) {
                clearInterval(this.increment);
            }
        }, 1);
    }

    mouseExit = () => {
        if (this.increment) {
            clearInterval(this.increment);
        }

        this.increment = setInterval(() => {
            this.setState({textlerp: this.state.textlerp - 0.1});

            if (this.state.textlerp <= 0) {
                clearInterval(this.increment);
            }
        }, 1);
    }

    render() {
        return (
            <a href={this.props.href} className={this.props.className} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}>
                <i className={`${this.props.icon} icon`}></i> 
                <span className="expansion">
                    <span className="text">{(this.props.name).slice(0, this.props.name.length * Math.max(this.state.textlerp, 0))}</span>
                    <i className="fa-solid fa-arrow-up-right-from-square external"></i>
                </span>
            </a>
        );
    }

    componentWillUnmount() {
        clearInterval(this.increment);
    }
}

export default Link;