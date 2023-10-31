import React, { useRef, useState } from "react";

const Picture = ({ readablePicture, setReadablePicture, setPicture }) => {
  const [error, setError] = useState("");
  const inputRef = useRef();
  const handlePicture = (e) => {
    let pic = e.target.files[0];
    if (
      pic.type !== "image/png" &&
      pic.type !== "image/gpeg" &&
      pic.type !== "image/webp"
    ) {
      setError(`${pic.name} format is not supported`);
      return;
    } else if (pic.size > 1024 * 1024 * 5) {
      setError(`${pic.name} if too large, maximum 5mb allowed.`);
      return;
    } else {
      setError("");
      setPicture(pic);
      const reader = new FileReader();
      reader.readAsDataURL(pic);
      reader.onload = (e) => {
        setReadablePicture(e.target.result);
      };
    }
  };
  const handleChangePic = () => {
    setPicture("");
    setReadablePicture("");
  };
  return (
    <div className="mt-8 content-center dark:text-dark_text_1 space-y-1">
      <label htmlFor="picture" className="text-sm font-bold tracking-wide">
        Picture (Optional)
      </label>
      {readablePicture ? (
        <div>
          <img
            src={readablePicture}
            alt="picture"
            className="w-20 h-20 object-cover rounded-full"
          />
          <div
            onClick={() => handleChangePic()}
            className="w-20 mt-2 py-2 dark:bg-dark_bg_3 text-xm flex items-center justify-center cursor-pointer  rounded-md">
            Remove
          </div>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current.click()}
          className="w-full h-10 dark:bg-dark_bg_3 flex items-center justify-center cursor-pointer font-bold rounded-md">
          Upload picture
        </div>
      )}
      <input
        type="file"
        name="picture"
        id="picture"
        hidden
        ref={inputRef}
        accept="image/png, image/gpeg , image/webp"
        onChange={handlePicture}
      />
      <div className="mt-2">
        <p className="text-red-400">{error}</p>
      </div>
    </div>
  );
};

export default Picture;
