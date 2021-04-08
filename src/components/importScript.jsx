import { useState, useEffect } from "react";

const useImportScript = (resourceUrl) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [resourceUrl]);
};
export default useImportScript;

//   import importScript from "./components/importScript.jsx";
//   const Demo = (props) => {
//     importScript("./assets/js/main.js");
//   };
