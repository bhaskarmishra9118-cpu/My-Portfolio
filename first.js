const text = ["MERN Stack Developer", "Full Stack Developer", "Backend Developer"];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent = currentText.substring(0, j++);
    
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000); // pause before deleting
      return;
    }

  } else {
    document.getElementById("typing").textContent = currentText.substring(0, j--);

    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length; // move to next text
    }
  }

  setTimeout(type, isDeleting ? 50 : 100); // typing speed
}

// Start animation
type();
