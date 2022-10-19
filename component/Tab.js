import React from "react";
import Link from "next/link";

const Tab = (props) => {
  const divclassName =
    props.tabName == "Reel"
      ? "ml-36 m:ml-2 z-10 m-2 hover:text-blue-500"
      : "m-2 hover:text-blue-500";
  return (
    <div className={divclassName}>
      <Link href={props.linkTo}>
        <a className="flex flex-col items-center justify-center text-sm">
          <img
            className="pb-1"
            src={props.assetUrl}
            alt={`${props.tabName} logo`}
          />{" "}
          {props.tabName}
        </a>
      </Link>
    </div>
  );
};

export default Tab;
