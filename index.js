import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;

var form = document.getElementById("image-form");
var input = document.getElementById("image-input");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  var file = input.files[0];
  var reader = new FileReader();
  
  reader.onload = function(e) {
    var img = document.createElement("img");
    img.src = e.target.result;
    document.body.appendChild(img);
  };
  
  reader.readAsDataURL(file);
});
/*=============================== second nav bar================*/

var menuIcon = document.querySelector(".menu-icon");
var menu = document.querySelector("ul");

menuIcon.addEventListener("click", function() {
  menu.classList.toggle("show");
});
var img = document.createElement("img");
img.id = "selected-image";
img.src = e.target.result;
