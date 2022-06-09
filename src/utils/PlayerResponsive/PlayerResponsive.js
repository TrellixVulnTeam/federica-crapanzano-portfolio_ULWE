import React from "react";
import ReactPlayer from "react-player";

const PlayerRenponsive = (props) => {
  const { url, width, height, className, playIcon, ...others } = props;
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className={`react-player ${className}`}
        url={url}
        width={width}
        height={height}
        playIcon={playIcon}
        {...others}
      />
    </div>
  );
};

export default PlayerRenponsive;
