import './App.css';
import Card from './Card.js';
import PostList from './PostList.js';

function App() {
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
        posts= {[
          // Generate a bunch of fake posts
          ...Array(10).fill().map((_, index) => {
            return {
              title: `Post ${index}`,
              date: new Date().toLocaleDateString(),
              content: [...Array(300)].map(() => Math.random().toString(36)[2]).join(''),
              icon: "fas fa-file-alt"
            };
          })
        ]}  
      />
    </div>
  );
}

export default App;
