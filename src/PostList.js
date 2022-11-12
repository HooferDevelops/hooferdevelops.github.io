import "./PostList.scss";
import React from "react";
import axios from "axios";

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };

    }

    componentDidMount() {
        // Bypass GitHub rate limit by making a direct request to the list
        // page instead of using the GitHub API.

        axios.get("https://raw.githubusercontent.com/HooferDevelops/hooferdevelops.github.io/POSTS/POSTS.json").then((posts) => {
            // Download the list of posts from GitHub.

            posts = posts.data.map((post) => {
                return axios.get(`https://raw.githubusercontent.com/HooferDevelops/hooferdevelops.github.io/POSTS/${post}`);
            });

            Promise.all(posts).then((responses) => {
                responses = responses.map((post) => {
                    let parser = new DOMParser();

                    let document = parser.parseFromString(post.data, "text/xml");

                    let title = document.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    
                    // Get the multiline content of the post. Add a line break to the new lines, except for the first one.
                    let content = document.querySelector("content").innerHTML.replace(/\n/g, "<br />").replace("<br />", "");

                    // Limit the length of the post to 500 characters.
                    content = content.substring(0, 300) + (content.length > 300 ? "..." : "");

                    // Limit the length of the title to 20 characters.
                    title = title.substring(0, 20) + (title.length > 20 ? "..." : "");

                    // Return the post
                    return {
                        title: title,
                        date: document.getElementsByTagName("date")[0].childNodes[0].nodeValue,
                        content: content,
                        icon: document.getElementsByTagName("icon")[0].childNodes[0].nodeValue
                    };
                });

                this.setState({ posts: responses });
            });
        });
    }

    render() {
        return (
            <div className="post-list">
                {
                    this.state.posts.map((post, index) => {
                        return (
                            <div className="post" key={index}>
                                <i className={`${post.icon} icon`}></i>
                                <h1 className="title">{post.title}</h1>
                                <h2 className="date"><i className="fa-solid fa-calendar"></i> {post.date}</h2>
                                <div className="content" dangerouslySetInnerHTML={{__html: post.content}}></div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default PostList;