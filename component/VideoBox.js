
import React, { useState, useEffect } from "react";
import { saveAs } from 'file-saver';

const VideoBox = (videoLink) => {
  const [videoToShow, setVideoToShow] = useState("");

  const handleDownload = (e)=>{
    e.preventDefault();
    console.log(videoToShow.videoLink)
    saveAs(videoToShow.videoLink)
    //window.open(videoToShow.videoLink, '_blank', 'noopener,noreferrer', 'download');
  }

  useEffect(() => {
    setVideoToShow(videoLink);
    return () => {};
  }, [videoLink, videoToShow]);

  return (
    <div className="max-w-[325px]">
      <button
        type="submit"
        className="px-4 mt-4 bg-blue-600 w-full flex justify-center h-8 items-center rounded-full text-white"
        onClick={handleDownload}
        >
        <img className="mr-1" src="/assets/ig-downloder-logo.png" alt="reel-logo"/>
        <span className="mr-1">Download Link 1</span>
      </button>
  </div>
  );
};
export default VideoBox