import React, { Component } from 'react'
import NewsITems from './NewsITems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {
    articles = []
    static defaultProps = {
        category: 'general',
    }

    static propTypes = {
        catagory: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            spinner: false,
            page: 1,
            total_article: 1,
        }
    }

    async componentDidMount() {
        this.setState({ spinner: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=16&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            spinner: false
        })

    }

    captlizefirstletter = (str1) => {

        const str2 = str1.charAt(0).toUpperCase() + str1.slice(1);
        return str2;
    }

    fetchMoreData = async () => {
        this.setState({
            spinner: true
        })
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=16&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            total_article: parsedData.totalResults,
            spinner: false,
        })

    }

    render() {
        return (
            <div className='container' style={{ marginTop: "75px" }}>
                <h3 className='mx-3 text-center' style={{ fontWeight: "650" }}>Banana News - Top {this.captlizefirstletter(this.props.category)} Headlines</h3>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    style={{ display: 'flex', flexDirection: 'column-reverse' }}
                    hasMore={this.state.articles.length !== this.state.total_article}
                    loader={<></>}
                    scrollableTarget="scrollableDiv"
                >

                    <div className='row container d-flex justify-content-start'  >
                        {
                            this.state.articles.map((element) => {
                                return (
                                    <div className='col-md-3'>
                                        <NewsITems title={element.title ? element.title.slice(0, 45) : ""}
                                            description={element.description ? element.title.slice(0, 120) : ""}
                                            Imageurl={element.urlToImage}
                                            NewsUrl={element.url}
                                            PublishedAt={element.publishedAt}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </InfiniteScroll>
                <div>{
                    <Spinner hidden={this.state.spinner} />
                }
                </div>
            </div >
        )
    }
}

export default News