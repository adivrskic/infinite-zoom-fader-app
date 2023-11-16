import React, { useState } from "react";
import "./App.css";
import { InfiniteZoomFader } from "infinite-zoom-fader";
import { images } from "./images";
import Menu from "./components/menu/Menu";
import Setting from "./components/setting/Setting";

function App() {
  const [setting, setSetting] = useState("zoom");
  const [zoom, setZoom] = useState("out");
  const [zoomScale, setZoomScale] = useState(0.75);
  const [zoomTime, setZoomTime] = useState(10);
  const [zoomTimingFunction, setZoomTimingFunction] = useState("linear");
  const [zoomMax, setZoomMax] = useState(0.25);
  const [transitionTime, setTransitionTime] = useState(1);

  const zoomConfig = {
    zoom,
    zoomScale,
    zoomTime,
    zoomTimingFunction,
    zoomMax,
    transitionTime,
  };

  const updateConfig = (val) => {
    setting === "zoom" && setZoom(val);
    setting === "zoomScale" && setZoomScale(Number(val));
    setting === "zoomTime" && setZoomTime(Number(val));
    setting === "zoomMax" && setZoomMax(Number(val));
    setting === "zoomTimingFunction" && setZoomTimingFunction(val);
    setting === "transitionTime" && setTransitionTime(Number(val));
  };

  return (
    <InfiniteZoomFader
      images={images}
      zoom={zoom}
      zoomScale={zoomScale}
      zoomTime={zoomTime}
      zoomTimingFunction={zoomTimingFunction}
      zoomMax={zoomMax}
      transitionTime={transitionTime}
    >
      <Menu setting={setting} onSetSetting={(setting) => setSetting(setting)} />
      {setting && (
        <Setting
          setting={setting}
          zoomConfig={zoomConfig}
          onSettingChange={(val) => updateConfig(val)}
        />
      )}
    </InfiniteZoomFader>
  );
}

export default App;
