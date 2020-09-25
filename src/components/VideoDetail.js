import React from 'react'
import { Paper, Typography } from "@material-ui/core";
const VideoDetail = ({ video }) => {

    if (!video) return <div>loading....</div>;
    console.log(video.id.videoId)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div className="videoDetail">
      <Paper elevation={0} className="videoDetail__video">
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        ></iframe>
      </Paper>
      <Paper elevation={0} className="videoDetail__info">
        <Typography variant="h4">{video.snippet.title}</Typography>
        <hr />
        <div className="videoDetail__channel-box">
          <Typography variant="h6" className="videoDetail__publisher">
            {video.snippet.channelTitle}
          </Typography>
          <button>訂閱</button>
        </div>

        <Typography className='videoDetail__description' variant="subtitle2">{video.snippet.description}</Typography>
        <hr />
      </Paper>
    </div>
  );
};

export default VideoDetail;
