import React from "react";
import s from "./News.module.css";

const News = () => {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "http://newsapi.org/v2/everything?q=tesla&from=2021-01-11&sortBy=publishedAt&apiKey=2a0f8b326c2d400ca3f2ba151c8f1c3f"
    )
      .then((response) => response.json())
      .then((json) => setNews(json.articles));
  }, [setNews]);
  console.log(news);
  return (
    <div>
      {news.map((x) => {
        return (
          <div key={x.title} className={s.newsBlock}>
            <img src={x.urlToImage} alt="tt" />
            <span>{x.content}</span>
          <button><a href={x.url} target="_blank">Read more</a> </button>
          </div>
        );
      })}
    </div>
  );
};

export default News;
