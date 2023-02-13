
    window.addEventListener("load", function() {
      var circle = document.querySelector("circle");
      circle.addEventListener("mouseover", function() {
        this.setAttribute("fill", "orange");
      });
      circle.addEventListener("mouseout", function() {
        this.setAttribute("fill", "none");
      });
    });


const button = document.getElementById("myButton");
const line = document.getElementById("myLine");

button.addEventListener("click", function() { line.style.color = "red"; 
});
















