import React from 'react';
import YouTube from 'react-youtube';
import "./VideoComponent.scss"

const VideoComponent = () => {
    const videoId = 'se50viFJ0AQ';
    const opts = {
        width: '320',
        height: '570', 
    }
    
    return (
    <div className>
        <YouTube videoId={videoId} opts={opts} />
    </div>
    );
};

export default VideoComponent