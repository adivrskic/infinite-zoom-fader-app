import React from "react";
import "./setting.css";

const Setting = ({ setting, zoomConfig, onSettingChange }) => {
  const settingMap = {
    zoom: {
      title: "Zoom",
      desc: '"in" or "out" - determines the image zoom direction',
    },
    zoomMax: {
      title: "Zoom Max (%)",
      desc: "number between 0 and 1 - determines the maximum zoom percentage of the images between 0 and 100 ",
    },
    zoomScale: {
      title: "Zoom Scale (%)",
      desc: "number between 0 and 1 - determines how much the images scale up or down in size",
    },
    zoomTime: {
      title: "Zoom Time (s)",
      desc: "number - the length of time each image remains on screen before transitioning",
    },
    transitionTime: {
      title: "Transition Time (s)",
      desc: "number - the length of time for transitions between images",
    },
  };

  return (
    <div className="setting">
      {setting === "zoom" ? (
        <input
          type="text"
          onChange={(e) => onSettingChange(e.target.value)}
          value={zoomConfig[setting]}
        />
      ) : (
        <input
          type="number"
          pattern="[0-9]*"
          inputmode="numeric"
          value={zoomConfig[setting]}
          onChange={(e) => onSettingChange(e.target.value)}
        />
      )}
      <h2>{settingMap[setting].title}</h2>
      <p>{settingMap[setting].desc}</p>
    </div>
  );
};

export default Setting;
