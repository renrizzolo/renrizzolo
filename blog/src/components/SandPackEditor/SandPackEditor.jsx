import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import theme from "../../gatsby-theme-golden-condor/theme";

const SandPackEditor = ({ code = "", inline = "", files = {}, ...rest }) => {
  return (
    <Sandpack
      theme="dark"
      template="react"
      options={{ externalResources: [""] }}
      customSetup={{
        entry: "/index.js",
        dependencies: {
          "theme-ui": "latest",
          "@emotion/react": "latest",
        },
      }}
      files={{
        // index but wrapped in theme-ui provider
        "/index.js": {
          code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Root from "./Root";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Root>
      <App />
    </Root>
  </StrictMode>
);
`,
          hidden: true,
        },
        // THIS IS ALL VERY HACKY
        "/App.js":
          code ||
          `
import * as C from "./UI";
export default () => (
  ${inline}
);`,
        "/Root.js": {
          code: `import { ThemeProvider } from "@emotion/react";
const Root = ({ children }) => {
return <ThemeProvider theme={${JSON.stringify(
            theme
          )}}>{children}</ThemeProvider>;
}; export default Root;`,
          hidden: true,
        },
        "/UI.js": {
          code: `export * from "theme-ui";`,
          hidden: true,
        },
        ...files,
      }}
      {...rest}
    />
  );
};

export default SandPackEditor;
