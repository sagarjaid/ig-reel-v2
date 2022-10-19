import React from "react";
import Tab from "./Tab";

const NavTabs = () => {
  return (
    <div className="mt-4 sm:mx-8 flex flex-row justify-around items-center overflow-x-auto">
      <Tab tabName="Reel" linkTo="/" assetUrl="/assets/reel-logo.png" />
      <Tab tabName="Photo" linkTo="/photo" assetUrl="/assets/photo-logo.png" />
      <Tab tabName="IGTV" linkTo="/igtv" assetUrl="/assets/igtv-logo.png" />
      <Tab tabName="Video" linkTo="/video" assetUrl="/assets/video-logo.png" />
      <Tab
        tabName="Music"
        linkTo="/music"
        assetUrl="/assets/music-audio-logo.png"
      />
      <Tab
        tabName="Stories"
        linkTo="/ig-stories"
        assetUrl="/assets/ig-stories-logo.png"
      />
      <Tab
        tabName="Profile"
        linkTo="/ig-cover-pic"
        assetUrl="/assets/ig-cover-pic-logo.png"
      />
    </div>
  );
};

export default NavTabs;
