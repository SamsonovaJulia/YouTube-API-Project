import React, { useState, useEffect } from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBars/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import "./App.scss";

function App() {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState();
  const [activeMode, setActiveMode] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    setErrorMessage(false);
  }, [video, videos]);

  const handleSubmit = async (termFromSearchBar) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: termFromSearchBar,
        },
      });
      if (response.data.items.length) {
        setActiveMode("videos");
        setVideos(response.data.items);
      } else {
        setActiveMode("error");
        setErrorMessage("Sorry, we did not find anything by your keyword");
      }
    } catch (e) {
      setActiveMode("error");
      setErrorMessage("Try later");
    }
  };

  const handleSubmitLink = async (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    var res = match && match[7].length === 11 ? match[7] : false;
    if (res) {
      setVideo(`https://www.youtube.com/embed/${res}`);
      setActiveMode("video");
    } else {
      setErrorMessage("Please, check your URL");
      setActiveMode("error");
    }
  };

  return (
    <div className="App">
      <div className="searchWrapper">
        <SearchBar
          searchBarName="Video Search"
          handleFormSubmit={handleSubmit}
          buttonName="Search by keyword"
          inputPlaceholder="keyword search"
          buttonClassName="submitButton"
        />
        <SearchBar
          searchBarName="Link Search"
          handleFormSubmit={handleSubmitLink}
          buttonName="Search by link"
          inputPlaceholder="link search"
          buttonClassName="submitLinkButton"
        />
      </div>
      <div className="iframeWrapper">
        {activeMode === "videos" && <VideoList videos={videos} />}
        {activeMode === "video" && (
          <iframe
            title="youtube-video"
            width="90%"
            height="360"
            src={video}
            frameBorder="0"
          ></iframe>
        )}
        {activeMode === "error" && (
          <p className="errorMessage">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default App;
