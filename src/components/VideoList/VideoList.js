import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player/youtube";
import "./VideoList.scss";

const VideoList = ({ videos }) => {
  const YoutubeSlide = ({ url, isSelected }) => (
    <ReactPlayer width="100%" url={url} playing={isSelected} />
  );

  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) =>
    url.substr("https://www.youtube.com/embed/".length, url.length);

  const customRenderThumb = (children) =>
    children.map((item) => {
      const videoId = getVideoId(item.props.url);
      return (
        <img key={videoId} src={getVideoThumb(videoId)} alt={item.props.alt} />
      );
    });

  return (
    <Carousel
      renderItem={customRenderItem}
      renderThumbs={customRenderThumb}
      showStatus={false}
      showArrows={false}
    >
      {videos
        .filter((video) => video.id.videoId)
        .map((video) => {
          const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
          return (
            <YoutubeSlide
              key={video.id.videoId}
              url={videoSrc}
              alt={video.snippet.description}
            />
          );
        })}
    </Carousel>
  );
};

export default VideoList;
