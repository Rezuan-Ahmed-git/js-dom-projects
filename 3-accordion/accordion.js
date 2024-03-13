// Variables

// const accordion = document.getElementsByClassName('content-container');

// for (let i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//   });
// }

//   ANOTHER SOLUTION == only a single accordion will open at a time and others will be closed

// Variables
const accordions = document.getElementsByClassName('content-container');

// Event listener for each accordion
for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function () {
    const isActive = this.classList.contains('active');

    // Close all accordions
    closeAllAccordions();

    // Toggle the active class for the clicked accordion
    if (!isActive) {
      this.classList.add('active');
    }
  });
}

// Function to close all accordions
function closeAllAccordions() {
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('active');
  }
}
