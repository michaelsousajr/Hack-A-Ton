import React, { useEffect, useState } from 'react';

const TechnologyNews = () => {
  const [news, setNews] = useState([]);
  const apiKey = "85c891f7566440909ae68b6ea0efc33b";

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 'ok') {
          setNews(data.articles);
        }
      })
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="container mt-2">
      <h2>Technology News</h2>
      <div className="row mt-5">
        {news.map((article) => (
          <div className="col-md-4 mb-2" key={article.title}>
            <div className="card">
              <img src={article.urlToImage} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyNews;
