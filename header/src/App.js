import React from "react";

const App = (props) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "red",
      }}
    >
      <h1>
        Header {process.env.REACT_APP_NAME_ID} {props.title}
      </h1>
    </div>
  );
};

export default App;
