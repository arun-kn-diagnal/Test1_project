// VideoPlayer.tsx
import React from 'react';

interface VideoPlayerProps {
  src: string;
  width?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width = "100%" }) => {
  return (
    <video controls width={width}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
