import React from "react";

class VideoDetail extends React.Component {
  render() {
    const { video } = this.props;
    let videoUrl = "";

    if (video) {
      videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    } else {
      return false;
    }

    return (
      <div>
        <iframe
          width="560"
          height="315"
          title="Video Player"
          src={videoUrl}
          frameBorder="0"
        />
        <h1>{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
      </div>
    );
  }
}

export default VideoDetail;
