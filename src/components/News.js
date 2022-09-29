import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setarticle] = useState([])
  const [loading, setLoading] = useState(true)
  const [page , setPage] = useState(1);
  const [totalResults, settotalResult] = useState(0);

  document.title = `NewsApp - ${props.category}`
  useEffect(() => {
    const getData = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`
      setLoading(true)
      const data = await fetch(url);
      const parsedData = await data.json();
      setarticle(parsedData.articles)
      settotalResult(parsedData.totalResults)
      setLoading(false)
    }
    getData();
  }, [props.category])

  const capitalize=(text) =>{
    var i, words, w, result = '';

    words = text.split(' ');

    for (i = 0; i < words.length; i += 1) {
        w = words[i];
        result += w.substr(0,1).toUpperCase() + w.substr(1);
        if (i < words.length - 1) {
            result += ' ';    
        }
    }

    return result;
  }

  const fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page+1}&pageSize=${props.pageSize}`
      let data= await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      setarticle(articles.concat(parsedData.articles))
      settotalResult(parsedData.totalResults)
      setPage(page+1);
  };

  return (
    <>
          <h2 className="text-center" style={{margin:'22px 0px',marginTop:'68px'}}>NewsApp - Top  {capitalize(props.category)}  Headlines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">

        <div className="row">
            {articles.map((element)=>{
              return(  
                <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt= {element.publishedAt}
                  />
              </div>
                )
              })}
           </div>
          </div>
            </InfiniteScroll>
      </>
  )
}

export default News

