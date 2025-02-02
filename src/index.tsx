import React from "react";
import ReactDOM from "react-dom";
//import Board from "./Board";
import "./index.css";
//import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
//import { MakeNote } from "./components/MakeNote";
//import { CorkBoard } from "./CorkBoard";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

/*
observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <React.StrictMode>
            <div
                style={{
                    width: "500px",
                    height: "500px",
                    border: "1px solid gray"
                }}
            >
                <Board picPosition={picPosition} />
            </div>
            <MakeNote></MakeNote>
        </React.StrictMode>,
        document.getElementById("root")
    );
});
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
