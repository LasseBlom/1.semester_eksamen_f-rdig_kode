// Hamburgermenu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('is-active'); // Optional for adding animation or styling to the hamburger
});


// Upload funktion

const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("file-input");
const browse = document.getElementById("browse");

// Simulate click when "Browse" is clicked
browse.addEventListener("click", () => fileInput.click());

// Drag and Drop functionality
dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.style.borderColor = "#ff7316";
});

dropArea.addEventListener("dragleave", () => {
  dropArea.style.borderColor = "#ddd";
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.style.borderColor = "#ddd";
  handleFiles(e.dataTransfer.files);
});

// Handle file input
fileInput.addEventListener("change", () => {
  handleFiles(fileInput.files);
});

function handleFiles(files) {
  [...files].forEach(file => {
    console.log(`Uploaded: ${file.name}`);
    // You can dynamically add file names to the "Uploaded" section here
  });
}
