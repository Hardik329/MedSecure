import React from "react";

const VideoEmbed = ({ url }) => {
  return (
    <div className="my-6">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={url}
          title="Embedded Video"
          className="w-full h-96 rounded-lg shadow"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoEmbed;