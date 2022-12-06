import React, { Component } from 'react'
import NewsITems from './NewsITems'

export class News extends Component {
    articles = [

    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d32bdc6b771c45b48ff94ec377af6c43";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }

    render() {
        return (
            <div className='container' style={{ marginTop: "75px" }}>
                <h3 className='mx-3' style={{ fontWeight: "650" }}>Banana News - Top Headlines</h3>

                <div className='row container' style={{
                    justifyContent: "space-between",
                }} >
                    {
                        this.state.articles.map((element) => {
                            return (
                                <div className='col-md-3'>
                                    <NewsITems title={element.title ? element.title.slice(0, 45) : ""}
                                        description={element.description ? element.title.slice(0, 120) : ""}
                                        Imageurl={element.urlToImage}
                                        NewsUrl={element.url}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}

export default News