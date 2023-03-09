import React, { Component } from 'react'

export class NewsItem extends Component {

  imageFail = (event) => {
    event.target.src = "https://cdn.mos.cms.futurecdn.net/838Uzpa69pphA8Vzq7GJo9-1200-80.jpg"
 }
  
  render() {
    let {title, description, imgurl, newsurl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={!imgurl?"https://cdn.mos.cms.futurecdn.net/838Uzpa69pphA8Vzq7GJo9-1200-80.jpg":imgurl} onError={this.imageFail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsurl} target={"_blank"} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem