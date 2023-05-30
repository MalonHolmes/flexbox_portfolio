/* window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var background = document.getElementById('background');
    var hue = scrolled / (document.body.scrollHeight - window.innerHeight) * 360; // Adjust the color range if needed
    background.style.backgroundColor = 'hsl(' + hue + ', 100%, 50%)';
  }); */


// Open the modal when the image is clicked
var image = document.querySelector(".image-popup");
image.addEventListener("click", function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
});

// Close the modal when the close button is clicked
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function(event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});