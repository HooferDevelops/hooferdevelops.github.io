import React from 'react';

import './App.css';
import Card from './Card.js';
import PostList from './PostList.js';
import Post from './Post.js';

function App() {
    // Active post component
    const [activePost, setActivePost] = React.useState(null);

    return (
        <div className="App">
            <Card 
                info="
                Hello! This is my site for showing off my current projects and thoughts. 
                If you need to contact me, I have provided my contact information.
                " 
                name="Hunter" 
                alias="Hoofer" 
                img="https://avatars.githubusercontent.com/u/60201971?v=4"
                links = {[
                    {
                        name: "GitHub",
                        icon: "fab fa-github",
                        link: "https://github.com/HooferDevelops"
                    },
                    {
                        name: "YouTube",
                        icon: "fab fa-youtube",
                        link: "https://www.youtube.com/@Hoofer"
                    },
                    {
                        name: "Discord",
                        icon: "fab fa-discord",
                        link: "https://discord.com/Typical"
                    }
                ]}
            />
            <PostList
                postEvent = {(post) => {
                    setActivePost(post);
                }}
            />
            {
                activePost ? (
                    <Post
                        title={activePost.title}
                        date={activePost.date}
                        content={activePost.content}
                        icon={activePost.icon}
                        onClose={() => {
                            setActivePost(null);
                        }}
                    />
                ) : null
            }
        </div>
    );
}

export default App;
