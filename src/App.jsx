import Footer from "./assets/Footer"
import NavBar from "./assets/NavBar"
import News from "./assets/News"
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRouteLoaderData
} from "react-router-dom";


export default class App extends Component {

  apikey = 'd32bdc6b771c45b48ff94ec377af6c43';

  state = {
    country: "us"
  }

  in_filter = () => {
    this.setState({ country: 'in' });
  }

  us_filter = () => {
    this.setState({ country: 'us' });
  }

  ch_filter = () => {
    this.setState({ country: 'ch' });
  }

  jp_filter = () => {
    this.setState({ country: 'jp' });
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar InFilter={this.in_filter} UsFilter={this.us_filter} JpFilter={this.jp_filter} ChFilter={this.ch_filter} />
          <Routes>
            <Route path="/" exact element={<News key="/" category='general' apikey={this.apikey} country={this.state.country} />} />
            <Route path="/home" exact element={<News key="home" category='general' apikey={this.apikey} country={this.state.country} />} />
            <Route path="/business" exact element={<News key="business" category='business' apikey={this.apikey} country={this.state.country} />} />
            <Route path="/entertainment" exact element={<News key="entertainment" category='entertainment' apikey={this.apikey} country={this.state.country} />} />
            <Route path="/health" exact element={<News key="health" category='health' apikey={this.apikey} country={this.state.country} />} />
            <Route path="/science" exact element={<News key="science" category='science' apikey={this.apikey} country={this.state.country} />} />
            <Route path="/sports" exact element={<News key="sports" category='sports' apikey={this.apikey} country={this.state.country} />} />
            <Route path="/technology" exact element={<News key="technology" category='technology' apikey={this.apikey} country={this.state.country} />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }
}