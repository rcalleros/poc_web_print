import { useState } from "react";
import logo from "./logo.svg";
import ResumeScreen from "./ResumeScreen";
function GalleryScreen() {
  const [activeRow, setActiveRow] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const GalleryList = [
    {
      name: "cake",
      cost: 3.4,
    },
    {
      name: "baseball hat",
      cost: 10.6,
    },
    {
      name: "xbox",
      cost: 15.25,
    },
    {
      name: "ps5",
      cost: 15.25,
    },
  ];
  console.log("activeRow", activeRow);
  return (
    <div>
      <h1>Gallery</h1>
      <div id="GalleryList">
        {GalleryList.map(function (x, y) {
          return (
            <button
              style={{ display: "block", width: "100%", cursor: "pointer" }}
              onClick={function () {
                setActiveRow(y);
                setActiveProduct(x);
              }}
            >
              <h4>{x.name}</h4>
              <p>
                {x.cost}
                {y === activeRow ? "*" : null}
              </p>
            </button>
          );
        })}
      </div>
      {activeProduct !== null ? (
        <h2>
          {activeProduct.name} {"-->"} ${activeProduct.cost}
        </h2>
      ) : null}
    </div>
  );
}
function Screen(prop) {
  if (prop.title === "home") {
    return (
      <div>
        <p>{prop.title}</p>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React thanks to richard
          </a>
        </header>
      </div>
    );
  }
  if (prop.title === "resume") {
    return <ResumeScreen></ResumeScreen>;
  }
  if (prop.title === "gallery") {
    return <GalleryScreen />;
  }
  if (prop.title === "contact") {
    return <h1>Contact Me</h1>;
  }
}

export default Screen;
