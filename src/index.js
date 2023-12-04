import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style.css";
import ImageRenderer from "./components/Image";
import ModalWrapper from "./components/ModalWindow";

function Tasks() {
  return (
    <div className="container">
      <ModalWrapper
        warning="Are you sure you want to delete all tasks😥"
        positive="Yes"
        negative="No"
      />
      <div className="header">
        <ImageRenderer img="images/pencil.png" />
        <h1>Todo-list</h1>
      </div>
      <div className="input">
        <h2>~Today I Need To~</h2>
        <input
          type="text"
          id="task-value"
          name=""
          placeholder="Enter task..."
          required
        />
        <button className="submit" onClick={addTask}>
          Submit
        </button>
      </div>
      <div className="list-container">
        <ul className="list-ul"></ul>
      </div>
      <button className="clear">Clear All</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Tasks />);

function addTask(word) {
  // variables
  const modal = document.querySelector(".modal");
  const yesBtn = document.querySelector(".yes");
  const noBtn = document.querySelector(".no");
  const listContainer = document.querySelector(".list-ul");
  const inputValue = document.getElementById("task-value");
  const clearAll = document.querySelector(".clear");
  // create a list tag and assign the input value as the text content in uppercase
  if (inputValue.value !== "") {
    word = inputValue.value;
    const div = document.createElement('div')
    div.classList.add('task-container')
    const list = document.createElement("li");
    list.classList.add("task");
    const textWord = word.toUpperCase();
    list.textContent = textWord;

    //   create two images
    const image1 = document.createElement("img");
    image1.src = "./images/check-mark.png";
    const image2 = document.createElement("img");
    image2.src = "./images/bin.png";
    // create two buttons
    const button1 = document.createElement("button");
    button1.textContent = "Done";
    button1.classList.add("done");
    button1.appendChild(image1);
    button1.addEventListener("click", function () {
      list.classList.add("overline");
    });
    const button2 = document.createElement("button");
    button2.textContent = "Delete";
    button2.classList.add("delete");
    button2.appendChild(image2);
    // remove task from DOM when user clicks on delete btn
    button2.addEventListener("click", function () {
      this.parentElement.remove();
    });
    // append it to li element
    div.append(list,button1, button2)
    
    listContainer.appendChild(div);

    // clear all tasks
    clearAll.addEventListener("click", function () {
      modal.classList.remove("hide");
    });
    yesBtn.addEventListener("click", function () {
      list.classList.add("hide");
      modal.classList.add("hide");
    });
    noBtn.addEventListener("click", function () {
      modal.classList.add("hide");
    });
  } else {
    alert("Please enter your tasks first!");
  }
}
