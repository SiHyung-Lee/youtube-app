import React from "react";
import api from "./Components/Api";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    video: ""
  };

  handlevideo = async searchTerm => {
    const result = await api.get("/search", {
      params: {
        q: searchTerm
      }
    });

    this.setState({
      videos: result.data.items,
      video: result.data.items[0]
    });
  };

  componentDidMount() {
    this.handlevideo("iphone");
  }

  render() {
    const { videos, video } = this.state;

    return (
      <div>
        <VideoDetail video={video} />
        <VideoList videos={videos} />
      </div>
    );
  }
}

export default App;
