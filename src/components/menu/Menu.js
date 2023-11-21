import React from "react";
import {
  TbFunction,
  TbScale,
  TbZoomScan,
  TbTransitionRight,
} from "react-icons/tb";
import { TiArrowMaximise } from "react-icons/ti";
import { PiTimerBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import "./menu.css";

function Menu({ setting, onSetSetting }) {
  return (
    <header className="menu">
      <h1>
        <a
          href="https://www.npmjs.com/package/infinite-zoom-fader"
          target="_blank"
          rel="noreferrer"
        >
          Infinite Zoom Fader
        </a>
      </h1>

      <menu className="settings">
        <span
          className={`settings-item ${setting === "zoom" && "active"}`}
          onClick={() => onSetSetting("zoom")}
        >
          <TbZoomScan />
        </span>
        <span
          className={`settings-item ${setting === "zoomMax" && "active"}`}
          onClick={() => onSetSetting("zoomMax")}
        >
          <TiArrowMaximise />
        </span>
        <span
          className={`settings-item ${setting === "zoomScale" && "active"}`}
          onClick={() => onSetSetting("zoomScale")}
        >
          <TbScale />
        </span>
        <span
          className={`settings-item ${setting === "zoomTime" && "active"}`}
          onClick={() => onSetSetting("zoomTime")}
        >
          <PiTimerBold />
        </span>
        <span
          className={`settings-item ${
            setting === "zoomTimingFunction" && "active"
          }`}
          onClick={() => onSetSetting("zoomTimingFunction")}
        >
          <TbFunction />
        </span>
        <span
          className={`settings-item ${
            setting === "transitionTime" && "active"
          }`}
          onClick={() => onSetSetting("transitionTime")}
        >
          <TbTransitionRight className="small" />
        </span>
        <span className={`settings-close`} onClick={() => onSetSetting("")}>
          <IoClose />
        </span>
      </menu>
    </header>
  );
}

export default Menu;
