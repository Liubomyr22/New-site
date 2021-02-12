import React from "react";
import s from "./News.module.css";
import axios from "axios";

const News = ({ loading }) => {
  const options = {
    method: "GET",
    url:
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=gYTdfgG7SOOOCOVQr8PsXaKighBKNXvM",
  };
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setNews(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(news);
  return (
    <div>
      {/* {loading && "Loading..."} */}
      {news.map((x) => {
        return (
          <div>
            <span className={s.newsTitle}>{x.title}</span>
            <div key={x.id} className={s.newsBlock}>
              {/* <img src={x.media.url} alt="tt" /> */}

              <span>{x.abstract}</span>
              <button>
                <a href={x.url} target="_blank">
                  Read more
                </a>{" "}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
