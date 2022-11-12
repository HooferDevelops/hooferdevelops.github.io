import "./Card.scss";

import React from "react";
import Link from "./Link";

class Card extends React.Component {
    render() {
        let links = this.props.links.map((link) => {
            return (<Link
                href={link.link}
                icon={link.icon}
                name={link.name}
                key={link.name}
            />);
        });


        return (
        <div className="card">
            <div className="content">
                <img src={this.props
                .img} alt="Avatar" />
                <div className="container">
                    <h4><b className="name">{this.props.name}</b> <span className="alias">{this.props.alias ? `aka ${this.props.alias}` : ""}</span></h4>
                    <p className="info">{this.props.info}</p>
                    <div className="links">
                        {links}
                    </div>
                </div>

                <Link className="source" href="https://github.com/HooferDevelops/hooferdevelops.github.io/tree/master" icon="fa-solid fa-code-branch" name="Source"></Link>
            </div>
        </div>
        );
    }
}

export default Card;