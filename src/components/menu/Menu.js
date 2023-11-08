import React, { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

function Menu({ onSetSetting }) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="menu">
      <header>
        <h1>
          <a
            href="https://www.npmjs.com/package/infinite-zoom-fader"
            target="_blank"
            rel="noreferrer"
          >
            Infinite Zoom Fader
          </a>
        </h1>

        <div class={`settings-selector ${showSettings ? "active" : ""}`}>
          <div className="settings-selector__toggle">
            {showSettings ? (
              <IoCloseOutline
                onClick={() => {
                  setShowSettings((show) => !show);
                  onSetSetting("");
                }}
              />
            ) : (
              <IoMenuOutline onClick={() => setShowSettings((show) => !show)} />
            )}
          </div>

          <menu className="settings">
            <span
              className="settings-item"
              onClick={() => onSetSetting("zoom")}
            >
              Zoom
            </span>
            <span
              className="settings-item"
              onClick={() => onSetSetting("zoomMax")}
            >
              Zoom Max
            </span>
            <span
              className="settings-item"
              onClick={() => onSetSetting("zoomScale")}
            >
              Zoom Scale
            </span>
            <span
              className="settings-item"
              onClick={() => onSetSetting("zoomTime")}
            >
              Zoom Time
            </span>
            <span
              className="settings-item"
              onClick={() => onSetSetting("transitionTime")}
            >
              Transition Time
            </span>
          </menu>
        </div>
      </header>
    </div>
  );
}

export default Menu;
