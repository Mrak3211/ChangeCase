import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  document.title = props.title;
  const handleUperCase = () => {
    let textt = text.toUpperCase();
    setText(textt);
    props.showAlert("Converted To UpperCase!", "success");
  };

  const handleLowerCase = () => {
    let textt = text.toLowerCase();
    setText(textt);
    props.showAlert("Converted To LowerCase!", "success");
  };

  const handleToSentenceCase = () => {
    const sentences = text.split(". ");
    const capitalizedSentences = sentences.map((sentence) => {
      const trimmedSentence = sentence.trim();
      return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);
    });
    const newText = capitalizedSentences.join(". ");
    setText(newText);
    props.showAlert("Converted To SentenceCase!", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    props.showAlert("Copied To Clipboard!", "success");
  };

  // Counting words by splitting on non-word characters and filtering out empty strings
  const wordCount = text.split(/\s+/).filter((word) => word !== "").length;

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className={`my-3`}>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#185088" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className={`text-center`}>
          <button className="btn btn-primary mx-1" onClick={handleUperCase}>
            Convert to UpperCase
          </button>{" "}
          <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
            Convert to LowerCase
          </button>{" "}
          <button
            className="btn btn-primary mx-1"
            onClick={handleToSentenceCase}
          >
            To Sentence Case
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={() => {
              setText("");
              props.showAlert("Text Cleared Successfully!", "success");
            }}
          >
            Clear
          </button>
        </div>
        <div className={`container my-3`}>
          <div
            className="card"
            style={{
              backgroundColor: props.mode === "dark" ? "#185088" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <div className="card-body">
              <h1>Your Summary</h1>
              <p>Words: {wordCount}</p>
              <p>Characters: {!text.length ? "0" : text.length}</p>
            </div>
          </div>
          <div
            className="card my-3"
            style={{
              backgroundColor: props.mode === "dark" ? "#185088" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <div className="card-body">
              <h3>Output Preview</h3>
              <div className="card my-3">
                <div className="card-body">
                  {text.length > 0
                    ? text
                    : "Enter Somthing in TextBox Above to Preview it Here "}
                </div>
              </div>
              <button
                className="btn btn-primary mx-1"
                onClick={handleCopyOutput}
                disabled={!text.length}
              >
                Copy Output
              </button>
              {copied && <p className="text-success">Copied to clipboard!</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
