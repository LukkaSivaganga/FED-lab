import React from "react";
import BlogContextDemo  from "./BlogContextDemo";
const bloginfo={
  React:{
    post:"Learn UseContext Hooks",
    author:"Varun k"
  },
  NodeJs:{
    post:"Node Commands",
    author:"Veena M"
  }
};
export const BlogContext=React.createContext(bloginfo);
export default function App(){
  return(
    <div className="App">
      <div>
        <h1>UseContext()Demo</h1>
        <BlogContext.Provider value={bloginfo}>
          <BlogContextDemo/>
        </BlogContext.Provider>
      </div>
    </div>
  );
}