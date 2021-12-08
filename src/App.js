import "./App.css";
import css from "./previewStyle.js";
import md from "./sampleMd.js";
import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

// App.js
const AppJs = `import { useState, useEffect } from "react";
import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import txt from "./example.md";
import "./style.css"

const App = () => {
  const [md, setMd] = useState("");

  useEffect(() => {
    async function fetchMd() {
      let loadedFile = await fetch(txt);
      loadedFile = await loadedFile.text();
      setMd(loadedFile);
    }
    setMd(fetchMd(txt));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: micromark(md, { allowDangerousHtml: true,
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()] }) }} />;
}

export default App
`;

// example.md
// const markdown = `# Hello world`;

const App = () => <div className="App">
    <Sandpack
      template="react"
      files={{
        "/App.js": {
          code: AppJs,
          hidden: true,
        },
        "/style.css": {
          code: css,
          hidden: true,
        },
        "/example.md": {
          code: md,
          active: true,
        },
      }}
      customSetup={{
        dependencies: {
          micromark: "3.0.10",
          "micromark-extension-gfm": "2.0.0",
        },
      }}
      options={{
        editorHeight: 800,
      }}
    />
  </div>
  

export default App;
