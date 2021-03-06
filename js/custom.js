"use strict";

var galItem = Array.from(document.getElementsByClassName("gallery"));
var covers = Array.from(document.getElementsByClassName("cover"));

var linkList = ["gal-just1.html", "gal-just2.html", "gal-just3.html", "gal-just4.html"];

galItem.forEach(function (el) {
  el.addEventListener("mouseover", function () {
    el.classList.add("coverHovered");
  });
  el.addEventListener("mouseleave", function () {
    el.classList.remove("coverHovered");
  });
});

var _loop = function _loop(i) {
  covers[i].addEventListener("click", function () {
    window.location = linkList[i];
    console.log(linkList[i]);
  });
};

for (var i = 0; i < covers.length; i++) {
  _loop(i);
}


