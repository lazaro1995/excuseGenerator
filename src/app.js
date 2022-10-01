/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function firstOnload() {
    var whoLength = who.length;
    var actionLength = action.length;
    var whatLength = what.length;
    var whenLength = when.length;
    var result = "";
    result += who[Math.floor(Math.random() * whoLength)] + " ";
    result += action[Math.floor(Math.random() * actionLength)] + " ";
    result += what[Math.floor(Math.random() * whatLength)] + " ";
    result += when[Math.floor(Math.random() * whenLength)];
    //console.log(Math.floor(Math.random() * whatLength))
    document.getElementById("excuse").innerHTML = result;
  }

  document.getElementById("btn").addEventListener("click", firstOnload);
};
