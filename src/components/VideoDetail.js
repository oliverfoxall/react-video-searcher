import React from 'react';

const VideoDetail = ({video}) => {
    if (!video){
        return (
           <div></div>
    )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
                    <div className="content">
                        <div className="column">
                            <iframe width="560" height="315"  title='video player' src={videoSrc} frameBorder="0"/>
                        </div>
                        <div className="column box">
                            <h4>{video.snippet.title}</h4>
                            <p>
                                {video.snippet.description}
                            </p>
                        </div>
                    </div>
    )
};

export default VideoDetail;