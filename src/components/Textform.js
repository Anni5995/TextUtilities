import React, { useState } from "react";
export default function Textform(props) {
  const handleCapsClick = () => {
    if (text === "") {
      props.showAlert(" Kuch hai hi nhi!!", "danger");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert(" Converted to Capital", "success");
    }
  };
  const handleSmlClick = () => {
    if (text === "") {
      props.showAlert(" Kuch nhi hai!!", "danger");
    } else {
      let change = text.toLowerCase();
      setText(change);
      props.showAlert(" Converted to Small", "success");
    }
  };
  const handleClrClick = () => {
    if (text === "") {
      props.showAlert(" Kuch hai hi nhi!!", "danger");
    } else {
      let change = "";
      setText(change);
      props.showAlert(" Everything Cleared!", "danger");
    }
  };
  const speak = () => {
    if (text === "") {
      props.showAlert("Kya bolu? kuch likh toh!", "danger");
    } else {
      let a = new SpeechSynthesisUtterance();
      a.text = text;
      window.speechSynthesis.speak(a);
    }
  };
  const copy = () => {
    if (text === "") {
      props.showAlert(" Kuch hai hi nhi copy karne ko", "danger");
    } else {
      let cpy = document.getElementById("myBox");
      cpy.select();
      navigator.clipboard.writeText(cpy.value);
      props.showAlert(" Copied!", "primary");
    }
  };
  const spc = () => {
    if (text === "") {
      props.showAlert(" Kuch ho toh mitau!!", "danger");
    } else {
      let spc = text.split(/[ ]+/);
      setText(spc.join(" "));
      props.showAlert(" Space Hata Lia", "warning");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleCapsClick}>
          Capital Kardo
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSmlClick}>
          Small Kardo
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClrClick}>
          Saaf Kardo
        </button>
        <button className="btn btn-success mx-1" onClick={speak}>
          Padhlo
        </button>
        <button className="btn btn-primary mx-1" onClick={copy}>
          Copy Kar
        </button>
        <button className="btn btn-primary mx-1" onClick={spc}>
          Space Hata
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          <b>{text.trim() === "" ? 0 : text.match(/\S+/g).length}</b> words and{" "}
          <b>{text.replace(/\s+/g, "").length}</b> characters
        </p>
        {/* <p>
          <b>{text.split(" ").length}</b> words, <b>{text.length}</b> characters
        </p> */}
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text === "" ? "Kuch Likho Yarr" : text}</p>
      </div>
    </>
  );
}
