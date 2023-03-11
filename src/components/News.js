import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'; //to use multiple prop-types as dwefault
import InfiniteScroll from "react-infinite-scroll-component"; //for infinite scrolling of page


export class News extends Component {

  static defaultProps = {
    language: '',
    pagesize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstletter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstletter(this.props.category)} - Galexio`;
  }

  updateNews = async () => {
    this.props.setprogress(30);
    const url = `https://newsapi.org/v2/top-headlines?q=space&category=${this.props.category}&language=${this.props.language}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setprogress(50);
    let parsedData = await data.json()
    this.props.setprogress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
    this.props.setprogress(100);
  }

  async componentDidMount(){
    this.updateNews();
  }


  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?q=space&category=${this.props.category}&language=${this.props.language}&apiKey=apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat( parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    })
  };

  render() {
    console.log("render")
    return (
      <>
        <h1 className="text-center my-2">Latest - {this.capitalizeFirstletter(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll 
        dataLength = {this.state.articles.length} 
        next = {this.fetchMoreData} 
        hasMore = {this.state.articles.length !== this.state.totalResults} 
        loader = {<Spinner />}>
          <div className="container">
            <div className="row">
              {this.state.articles.map((element)=> {
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
}

export default News
