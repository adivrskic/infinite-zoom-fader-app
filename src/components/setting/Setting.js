import React from "react";
import "./setting.css";

const Setting = ({ setting, zoomConfig, onSettingChange }) => {
  const settingMap = {
    zoom: {
      title: "Zoom",
      type: '"in" or "out"',
      desc: "Determines the image zoom direction",
    },
    zoomMax: {
      title: "Zoom Max (%)",
      type: "Number Between 0 and 1",
      desc: "Determines the maximum zoom percentage of the images between 0 and 100 ",
    },
    zoomScale: {
      title: "Zoom Scale (%)",
      type: "Number Between 0 and 1",
      desc: "Determines how much the images scale up or down in size",
    },
    zoomTime: {
      title: "Zoom Time (s)",
      type: "Number",
      desc: "The length of time each image remains on screen before transitioning",
    },
    zoomTimingFunction: {
      title: "Zoom Timing Function",
      type: "Timing Function or Cubic Bezier Function",
      desc: "The animation timing function",
    },
    transitionTime: {
      title: "Transition Time (s)",
      type: "Number",
      desc: "The transition time between images",
    },
  };

  return (
    <div className="container">
      <div className={`setting ${setting}`}>
        {setting === "zoom" || setting === "zoomTimingFunction" ? (
          <input
            type="text"
            onChange={(e) => onSettingChange(e.target.value)}
            value={zoomConfig[setting]}
          />
        ) : (
          <input
            type="number"
            pattern="[0-9]*"
            step="0.01"
            value={zoomConfig[setting]}
            onChange={(e) => onSettingChange(e.target.value)}
          />
        )}

        <h2>{settingMap[setting].title}</h2>
        <p>{settingMap[setting].type}</p>
        <p>{settingMap[setting].desc}</p>
      </div>
    </div>
  );
};

export default Setting;
