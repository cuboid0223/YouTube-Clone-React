import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
const VideoItem = ({ video, onVideoSelect }) => {
  console.log("1", video);
  return (
    <div className="videoItem">
      {/* <Grid item xs={12}>*/}
      <div className="videoItem__card" onClick={() => onVideoSelect(video)}>
        <img
          className="videoItem__thumbnail"
          src={video.snippet.thumbnails.high.url}
          alt="thumbnail"
        />
        <Typography variant="subtitle1">
          <b className='videoItem__title'>{video.snippet.title}</b>
          <p className="videoItem__channelTitle"> {video.snippet.channelTitle}</p>
        </Typography>
      </div>

      {/*  </Grid> */}
    </div>
  );
};

export default VideoItem;
