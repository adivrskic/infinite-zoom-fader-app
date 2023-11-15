import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { PiSwapBold } from "react-icons/pi";
import {
  TbFunction,
  TbScale,
  TbZoomScan,
  TbTransitionRight,
} from "react-icons/tb";
import { TiArrowMaximise } from "react-icons/ti";
import { PiTimerBold } from "react-icons/pi";
import { MdOutlineSwapHoriz } from "react-icons/md";

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

        <div className={`settings-selector ${showSettings ? "active" : ""}`}>
          <menu className="settings">
            <span
              className="settings-item"
              onClick={() => onSetSetting("zoom")}
            >
              <TbZoomScan />
            </span>
            <span
              className="settings-item"
              onClick={() => onSetSetting("zoomMax")}
            >
              <TiArrowMaximise />
            </span>
            <span
              className="settings-item"
              onClick={() => onSetSetting("zoomScale")}
            >
              <TbScale />
            </span>
            <span
              className="settings-item"
              onClick={() => onSetSetting("zoomTime")}
            >
              <PiTimerBold />
            </span>
            <span
              className="settings-item"
              onClick={() => onSetSetting("zoomTimingFunction")}
            >
              <TbFunction />
            </span>
            <span
              className="settings-item"
              onClick={() => onSetSetting("transitionTime")}
            >
              <TbTransitionRight />
            </span>
          </menu>
        </div>
      </header>
    </div>
  );
}

export default Menu;
