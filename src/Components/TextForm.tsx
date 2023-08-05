import React, { useState } from "react";

interface propType {
  title: string;
  showAlert: (arg0: string, arg1: string) => void;
  mode: string;
  heading:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}

export default function TextForm(props: propType) {
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

  const handleOnChange = (e: React.ChangeEvent<any>) => {
    setText(e.target.value);
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    props.showAlert("Copied To Clipboard!", "success");
  };

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
            rows={8}
          ></textarea>
        </div>
        <div className={`text-center`}>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUperCase}
          >
            Convert to UpperCase
          </button>{" "}
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowerCase}
          >
            Convert to LowerCase
          </button>{" "}
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleToSentenceCase}
          >
            To Sentence Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
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
              <p>
                Words:{" "}
                {
                  text.split(/\s/).filter((elem) => {
                    return elem.length !== 0;
                  }).length
                }
              </p>
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
                  {text.length > 0 ? text : "Nothing To Preview"}
                </div>
              </div>
              <button
                className="btn btn-primary mx-1"
                onClick={handleCopyOutput}
                disabled={text.length === 0}
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
