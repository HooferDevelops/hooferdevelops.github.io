import React from "react";
import "./Post.scss"
import XMLToReact from '@condenast/xml-to-react';

import Image from "./Image";
import SmallParagraph from "./SmallParagraph";

const xmlToReact = new XMLToReact({
    div: (attrs) => ({ type: 'div', props: attrs }),
    b: (attrs) => ({ type: 'b', props: attrs }),
    i: (attrs) => ({ type: 'i', props: attrs }),
    br: (attrs) => ({ type: 'br', props: attrs }),
    a: (attrs) => ({ type: 'a', props: attrs }),
    img: (attrs) => ({ type: Image, props: attrs }),
    h1: (attrs) => ({ type: 'h1', props: attrs }),
    h2: (attrs) => ({ type: 'h2', props: attrs }),
    sp: (attrs) => ({ type: SmallParagraph, props: attrs }),
    p: (attrs) => ({ type: 'p', props: attrs })
});

class Post extends React.Component {
    render() {
        console.log(this.props.content);
        //<div className="post-content"  dangerouslySetInnerHTML={{__html: this.props.content}}>
        return (
            <>
                <div className="post-container">
                    <div className="selected-post">
                        <div className="post-header">
                            <div className="post-title">
                                <i className={this.props.icon}></i> {this.props.title}
                            </div>
                            <b className="post-date">
                                <i className="fa-solid fa-calendar"></i> {this.props.date}
                            </b>

                            <div className="post-close" onClick={() => {
                                this.props?.onClose();
                            }}>
                                <i className="fa-solid fa-times"></i>
                            </div>
                        </div>
                        <div className="spacer"></div>
                        <div className="post-content">
                            {xmlToReact.convert(`<p>${this.props.content}</p>`)}
                        </div>
                    </div>
                </div>
                <div className="blur"></div>
            </>
        );
    }
}

export default Post;