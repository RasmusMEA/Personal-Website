import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function CozyRoads() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "projects/cozy-roads/Build/Build.loader.js",
        dataUrl: "projects/cozy-roads/Build/Build.data",
        frameworkUrl: "projects/cozy-roads/Build/Build.framework.js",
        codeUrl: "projects/cozy-roads/Build/Build.wasm",
        companyName: "RasmusMEA",
        productName: "CozyRoads",
        productVersion: "0.1.0",
    });

    return (
        <Unity 
            unityProvider={unityProvider} 
            style={{ 
                aspectRatio: "16:9",
                width: "100%",
            }} 
        />
    );
}

export default CozyRoads;
