import React, { Component } from 'react'

export class NewsItem extends Component {

  imageFail = (event) => {
    event.target.src = "https://cdn.mos.cms.futurecdn.net/838Uzpa69pphA8Vzq7GJo9-1200-80.jpg"
 }
  
  render() {
    let {title, description, imgurl, newsurl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={!imgurl?"https://cdn.mos.cms.futurecdn.net/838Uzpa69pphA8Vzq7GJo9-1200-80.jpg":imgurl} onError={this.imageFail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-text">{description}</h6>
            <h6 className="card-text"><small className="text-muted">Author: {!author?"Unknown":author}</small></h6>
            <h6 className="card-text"><small className="text-muted">Date: {new Date(date).toGMTString()}</small></h6>
            <h6 className="card-text"><small className="text-muted">Source: {source}</small></h6>
            <a rel="noreferrer" href={newsurl} target={"_blank"} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem