"use strict";

document.addEventListener("DOMContentLoaded", start);

let input;
let change;
let output;

function start() {
  console.log("start");

  // click on button -> generate output
  document.querySelector("button").addEventListener("click", generateOutput);
}

function generateOutput() {
  console.log("generate output");

  //get string from input
  input = document.querySelector("#input").value;
  console.log("input is: " + input);

  //get choice from select
  let changeList = document.querySelector("#change");
  change = changeList.options[changeList.selectedIndex].value;
  console.log("change is: " + change);

  //generate whatever chosen
  if (change == "firstchar") {
    output =
      input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
  } else if (change == "firstname") {
    output = input.substring(0, input.indexOf(" "));
  } else if (change == "lenghtfirst") {
    output = "lenght of first name: " + input.indexOf(" ");
  } else if (change == "middlename") {
    output =
      "middlename starts at: " +
      (input.indexOf(" ") + 1) +
      " and ends at: " +
      input.lastIndexOf(" ") +
      ". The middle name is: " +
      input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "));
  } else if (change == "filename") {
    if (input.endsWith(".png") == true || input.endsWith(".jpg") == true) {
      output = "this is a file!";
    } else {
      output = "this isn't a file";
    }
  } else if (change == "password") {
    let password = "*";
    output = password.repeat(input.length);
  } else if (change == "thirdchar") {
    output =
      input.substring(0, 2) +
      input.substring(2, 3).toUpperCase() +
      input.substring(3);
  } else if (change == "afterspace") {
    let space = input.indexOf(" ");
    output =
      input.substring(0, space + 1) +
      input.substring(space + 1, space + 2).toUpperCase() +
      input.substring(space + 2) +
      " -- this function only handles the first space in the input! :)";
  } else {
    output = input;
  }

  //insert output
  document.querySelector("#output").value = output;
}
