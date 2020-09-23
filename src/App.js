import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";
import "./scss/all.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount(){
    this.handleSubmit('聖誕結')
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 20,
        key: "AIzaSyB0xTIo8dLxjuYf09JzzvaXdkDG-9y_K9w",
        q: searchTerm,
      },
    });
    console.log("response", response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };



  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div className="app">
        <Grid className="app__gridContainer" container>
          <Grid item xs={12}>
            <Grid container spacing={10} className='app__flex-container'>

              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>

              <Grid item sm={8} xs={12} className='app__videoDetail'>
                <VideoDetail video={selectedVideo} />
              </Grid>

              <Grid item sm={4} xs={12} className='app__videoList'>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
