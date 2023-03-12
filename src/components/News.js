import React, { useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'; //to use multiple prop-types as dwefault
import InfiniteScroll from "react-infinite-scroll-component"; //for infinite scrolling of page


const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capitalizeFirstletter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setprogress(30);
    const url = `https://newsapi.org/v2/top-headlines?q=space&category=${props.category}&language=${props.language}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(url);
    props.setprogress(50);
    let parsedData = await data.json()
    props.setprogress(70);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setprogress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstletter(props.category)} - Galexio`;
    updateNews();
    //eslint-disable-next-line
  }, [])
  
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?q=space&category=${props.category}&language=${props.language}&apiKey=apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pagesize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json()
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1 className="text-center my-2">Latest - {capitalizeFirstletter(props.category)}</h1>
        {loading && <Spinner />}
        <InfiniteScroll 
        dataLength = {articles.length} 
        next = {fetchMoreData} 
        hasMore = {articles.length !== totalResults} 
        loader = {<Spinner />}>
          <div className="container">
            <div className="row">
              {articles.map((element)=> {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title?element.title.slice(0,61):""} description={element.description?element.description.slice(0,81):""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>  
          </div>
        </InfiniteScroll>
      </>
    );
}

News.defaultProps = {
  language: '',
  pagesize: 9,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
}

export default News;
