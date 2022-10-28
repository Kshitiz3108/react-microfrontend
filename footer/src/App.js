import React from "react";

const App = (props) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "green",
      }}
    >
      <h1>Footer</h1>
      <button
        onClick={() => {
          props.TitleSet("abc");
          console.log("asdb");
        }}
      >
        click
      </button>
    </div>
  );
};

export default App;
