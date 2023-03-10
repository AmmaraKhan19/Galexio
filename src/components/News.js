import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    language: '',
    pagesize: 6,
    category: ''
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async updateNews(pageNo){
    const url = `https://newsapi.org/v2/top-headlines?q=space&category=${this.props.category}&language=${this.props.language}&apiKey=72c0de6130f0495b90fee8bc985befe0&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?q=space&category=${this.props.category}&language=${this.props.language}&apiKey=72c0de6130f0495b90fee8bc985befe0&pageSize=${this.props.pagesize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handleprevClick = async ()=>{
    // let url = `https://newsapi.org/v2/top-headlines?q=space&category=${this.props.category}&language=${this.props.language}&apiKey=72c0de6130f0495b90fee8bc985befe0&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
  }

  handlenextClick = async ()=>{
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))) {
      // let url = `https://newsapi.org/v2/top-headlines?q=space&category=${this.props.category}&language=${this.props.language}&apiKey=72c0de6130f0495b90fee8bc985befe0&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
      // this.setState({loading: true});
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // this.setState({
      //   page: this.state.page + 1,
      //   articles: parsedData.articles,
      //   loading: false
      // })
    }
  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1 className="text-center">Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=> {
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,61):""} description={element.description?element.description.slice(0,81):""}
           imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
        })}

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextClick}>Next &rarr;</button>
        </div>
      </div>
      </div>
    );
  }
}

export default News
