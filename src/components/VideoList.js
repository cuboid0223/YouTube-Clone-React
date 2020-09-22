
import React from 'react'
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";
const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));

  console.log(listOfVideos);

  return (
    <Grid className='videoList'>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList
