import React from 'react';

class VideoList extends React.Component {
    render() {
        const { videos } = this.props;
        return (
            <div>
                {videos.map((item, id) => (
                    <div key={id}>
                        <img
                            src={item.snippet.thumbnails.default.url}
                            alt={item.snippet.title}
                        />
                        <p>{item.snippet.title}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default VideoList;
