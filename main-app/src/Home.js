import React, { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
const HeaderApp = React.lazy(() => import("header/App"));
const FooterApp = React.lazy(() => import("footer/App"));

const Home = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <Suspense fallback={"loading..."}>
        <HeaderApp title={title} />
      </Suspense>

      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>App1 Test {process.env.REACT_APP_NAME_ID}</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <FooterApp TitleSet={setTitle} />
      </Suspense>
    </div>
  );
};

export default Home;
