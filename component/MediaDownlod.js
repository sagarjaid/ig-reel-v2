import React from "react";
import CDNdownload from "./CDNdownload";
import Download from "./Download";

const MediaDownlod = (props) => {
  return (
    <div className="mt-4 flex flex-col justify-center items-center">
      {console.log(props.mediaLink, "props.mediaLink-1")}

      {props.mediaLink && props.url ? (
        <>
          <p className="text-sm font-normal mb-2 text-center">
            click on downloder button bellow 👇
          </p>
          {console.log(`/data/${props.mediaLink}`, "data URL 1")}

          <div className="m-2 flex justify-center">
            <video
              className="rounded-2xl"
              width="320px"
              height="auto"
              controls
              preload="auto"
            >
              <source src={`/data/${props.mediaLink}`} type="video/mp4" />
            </video>
          </div>
          <Download videoLink={`/data/${props.mediaLink}`} />

          {console.log(`/data/${props.mediaLink}`, "data URL 2")}
        </>
      ) : (
        ""
      )}
      {console.log(props.mediaLink, "props.mediaLink-2")}

      <CDNdownload cdnMediaLink={props.cdnMediaLink} url={props.url} />
    </div>
  );
};

export default MediaDownlod;
