import React from "react";

const InputBox = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="text-gray-600 shadow-md rounded-full border-2 border-blue-600 flex justify-around items-center mt-4 px-6"
    >
      <input
        type="text"
        name="url"
        placeholder="Paste Reel Link ..."
        className="w-full h-12  rounded-full text-sm font-light focus:outline-none text-black placeholder:text-slate-600 placeholder:font-light "
        value={props.url}
        onChange={props.handleChange}
      />
      <span className="flex items-center">
        {props.url ? (
          <img
            className="inline mx-2 cursor-pointer"
            width="20"
            onClick={props.handleClose}
            src="/assets/close-icon.png"
            alt="reel-logo"
          />
        ) : (
          <img
            className="inline mr-2 cursor-pointer"
            onClick={props.handlePaste}
            src="/assets/copy-icon.png"
            alt="reel-logo"
          />
        )}
        <button
          type="submit"
          disabled={props.disabledBtn}
          className="px-4 mr-2 bg-blue-600 w-min flex justify-center h-8 items-center rounded-full text-white"
        >
          <img
            className="mr-1"
            src="/assets/ig-downloder-logo.png"
            alt="reel-logo"
          />
          <span className="mr-1">Download</span>
        </button>
      </span>
    </form>
  );
};

export default InputBox;
