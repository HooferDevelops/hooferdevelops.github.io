import React from "react";

import "./Post.scss"

class Post extends React.Component {
    render() {
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
                        <div className="post-content"  dangerouslySetInnerHTML={{__html: this.props.content}}>
                        </div>
                    </div>
                </div>
                <div className="blur"></div>
            </>
        );
    }
}

export default Post;