import React from "react";
import blogData from "../data/blog";
import About from "./About";
// import Article from "./Article";
// don't import Article to App, it's imported in ArticleList already
import ArticleList from "./ArticleList";
import Header from "./Header";

// console.log(blogData);
// first i need to pass down blogData to App's components
// blogData.name 
// blogData.image
// blogData.about
// blogData.posts

function App() {
  return (
    <div className="App">
      {/* !!the Order in which you write components here matters!! */}
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      {/* <Article /> */}
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
