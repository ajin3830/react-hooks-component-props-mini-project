import React from "react";
import Article from "./Article";

// props destructured to posts
function ArticleList ({posts}) {
    // console.log(posts)

    const articleElement = posts.map(post => {
        return (
            // console.log(post.preview)
            <Article 
            // key is for React Internally keep track of each child in this list
            // because this list can be modified
            // can use the id or index of the element/item/child
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes} 
            />
        );
    });

    return (
        <main>
           {articleElement} 
        </main>
    )
}

export default ArticleList;

// Article is a child of ArticleList
// AKA Article is a component of ArticleList
// importing Article variable here so the props of ArticleList
// can be passed down to Article
// use .map() to make a new array that returns one article at a time
// then attach that new array inside the return of ArticleList for export