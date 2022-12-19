import React, { Component } from 'react'

export class NewsITems extends Component {
    render() {
        let { title, description, Imageurl, NewsUrl, PublishedAt } = this.props
        return (
            <div className="card my-3" style={{
                height: "355px",
                width: "auto"
            }}>
                <img src={Imageurl} className="card-img-top" alt="NewzImage" style={{
                    height: "10rem"
                }} />
                <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "650", fontSize: "100%" }} >{title}</h5>
                    <p className="card-text" style={{ fontWeight: "400", fontSize: "80%" }}>{description}...</p>
                    <a href={NewsUrl} className="btn btn-dark" target="blank" style={{ fontSize: "70%", fontWeight: "bold", position: "absolute", bottom: "15px" }}>Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsITems