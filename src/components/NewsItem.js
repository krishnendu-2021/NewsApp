import React from 'react'

const NewsItem = (props) => {
  return (
    <div className='my-3'>
        <div className="card" >
          <img src={!props.imageUrl ? "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png" : props.imageUrl}
         className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className='card-text'><small className='text-muted'>By {props.author?props.author:"unknown"} on {new Date(props.publishedAt).toUTCString()}</small></p>
            <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
  )
}

export default NewsItem