import { useState, useEffect } from 'react';
import '../styles/Carousel.scss';
import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const fetchNews = async () => {
  const resposne = await fetch(`
  https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API}`);
  const data = await resposne.json();
  return data.articles.slice(0, 5);
};

const fetchNewsData = async () => {
  const resposne = await fetch(`
  https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEWS_API}`);
  const data = await resposne.json();
  return data.articles.slice(0, 10);
};

fetchNewsData();

export default function NewsCarousel() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    (async () => {
      const articles = await fetchNews();
      const newsArticles = await fetchNewsData();
      setData(articles);
      setNewsData(newsArticles);
      console.log(newsData);
      // console.log(data);
    })();
  }, []);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <div className="news-container">
      <div className="carousel">
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
          {data.map(item => (
            <Carousel.Item key={item.publishedAt}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <img className="d-block w-100" src={item.urlToImage} alt={item.content} />
              </a>
              <Carousel.Caption>
                <h4>{item.content}</h4>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="news-card">
        {newsData.map((item, i) => (
          <div className={`news-${i + 1}`} key={item.publishedAt}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <img src={item.urlToImage} alt={item.content} />

              {i === 9 ? (
                <h5>{`${item.content}`}</h5>
              ) : (
                <h5>{`${item.content.substring(0, 100)}...`}</h5>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
