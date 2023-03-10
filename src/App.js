import "./App.css";

/*
    This is our application's top-level component.
    
    @author Andy Yang
*/
/*
  This is the entry-point for our application. Many different home pages
  
  @author Andy Yang
*/

import React from "react";
import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { NewsCards } from "./components/newsCards/NewsCards";

const alanKeyToken =
  "694cd48855660db47cf975bf13e78e2d2e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticles, setActiveArticles] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKeyToken,
      onCommand: ({ command, articles }) => {
        switch(command){
          case 'newsHeadline':
            setNewsArticles(articles);
            setActiveArticles(-1);
            //console.log(newsArticles);
            break;

          case 'highlight ':
            setActiveArticles((prev)=> prev+1);  
          break;
        } 
      },
    });
  }, []);
  
  return (
    <div className="app">
      <span className="title">
        Speech-Recognition News App
      </span>
      <NewsCards articles={newsArticles} activeArticles = {activeArticles}/>
    </div>
  );
};

export default App;
