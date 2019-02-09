import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
   const renderedList = videos.map((video) => {
       //console.log(`video ${video}`)
       return <VideoItem
           key={video.id.videoId}
           onVideoSelect={onVideoSelect}
           video={video}
       />;
    });

    return <div className='section'>{renderedList}</div>
};

export default VideoList;