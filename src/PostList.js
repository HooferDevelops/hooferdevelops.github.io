import "./PostList.scss";
import React from "react";

class PostList extends React.Component {
    render() {
        return (
            <div className="post-list">
                {
                    this.props.posts.map((post, index) => {
                        return (
                            <div className="post" key={index}>
                                <h1 class="title"><i className={post.icon}></i> {post.title}</h1>
                                <h2 class="date"><i className="fa-solid fa-calendar"></i> {post.date}</h2>
                                <div class="content">{post.content}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default PostList;