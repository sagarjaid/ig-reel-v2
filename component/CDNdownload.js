import React from "react";

const CDNdownload = (props) => {
  const handleDownload = (e) => {
    e.preventDefault();
    window.open(props.cdnMediaLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-[325px]">
      {props.cdnMediaLink && props.url && (
        <button
          type="submit"
          className="px-4 mt-4 bg-blue-600 w-full flex justify-center h-8 items-center rounded-full text-white"
          onClick={handleDownload}
        >
          <img
            className="mr-1"
            src="/assets/ig-downloder-logo.png"
            alt="reel-logo"
          />
          <span className="mr-1">Download Link 2</span>
        </button>
      )}
    </div>
  );
};

export default CDNdownload;
