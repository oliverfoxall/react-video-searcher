import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return ( 
      <div onClick={() => onVideoSelect(video)} className='media video-item'>
          <figure className='media-left'>
              <p className="image is-64x64">
                  <img src={video.snippet.thumbnails.medium.url} alt="video thumb"/>
              </p>
          </figure>
          <div className="media-content">
              <div className="content">
                  <p>
                      <strong>
                          {video.snippet.title}
                      </strong>
                      <br/>
                      {video.snippet.description}
                  </p>
              </div>
          </div>
      </div>
  )
};

export default VideoItem;