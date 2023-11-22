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

      <menu>
        <span
          className={`${setting === "zoom" && "active"}`}
          onClick={() => onSetSetting("zoom")}
        >
          <TbZoomScan />
        </span>
        <span
          className={`${setting === "zoomMax" && "active"}`}
          onClick={() => onSetSetting("zoomMax")}
        >
          <TiArrowMaximise />
        </span>
        <span
          className={`${setting === "zoomScale" && "active"}`}
          onClick={() => onSetSetting("zoomScale")}
        >
          <TbScale />
        </span>
        <span
          className={`${setting === "zoomTime" && "active"}`}
          onClick={() => onSetSetting("zoomTime")}
        >
          <PiTimerBold />
        </span>
        <span
          className={`${setting === "zoomTimingFunction" && "active"}`}
          onClick={() => onSetSetting("zoomTimingFunction")}
        >
          <TbFunction />
        </span>
        <span
          className={`${setting === "transitionTime" && "active"}`}
          onClick={() => onSetSetting("transitionTime")}
        >
          <TbTransitionRight className="small" />
        </span>
        <span className={`menu-close`} onClick={() => onSetSetting("")}>
          <IoClose />
        </span>
      </menu>
    </header>
  );
}

export default Menu;
