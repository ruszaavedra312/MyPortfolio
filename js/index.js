// Get DOM elements
const toggleMode = document.getElementById('modeToggle');
const modeIcon = document.getElementById('mode-icon');
const darkImg = document.getElementById('darkImg');
const allTextElements = document.querySelectorAll('p, li, a, i');
const spanH1 = document.querySelectorAll('h1, span');
const text = document.querySelectorAll('p.text, li.text');
let color1 = document.getElementsByClassName('spkt half-color');
let color2 = document.getElementsByClassName('ksk half-color');


// Initialize mode flag
let isDarkMode = false;

// Add click event listener
toggleMode.addEventListener('click', () => {
    // Toggle mode flag
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        // Activate dark mode
        document.body.style.background = "var(--dark-text)";
        allTextElements.forEach(element => {
            element.style.color = "var(--font-white)";
        });
        spanH1.forEach(el => { 
          el.style.color = "var(--font-white)";
          el.style.textShadow = "none";
          el.style.boxShadow = "none";
        }); 
        text.forEach(txt => { 
          txt.style.color = "var(--light-text)";
        });        
        modeIcon.classList.remove('lni-sun-1'); 
        modeIcon.classList.add('lni-moon-half-right-5');
        modeIcon.style.color = "var(--white-background-color)";
        darkImg.setAttribute("src", "img/nightlight.png");
    } else {
        // Activate light mode
        document.body.style.background = "var(--white-background-color)";
        allTextElements.forEach(element => {
            element.style.color = "var(--light-text)";
            modeIcon.style.color = "var(--light-text)";
        });

        spanH1.forEach(el => { 
          el.style.color = "var(--dark-text)";
          el.style.textShadow = "4px 4px 8px #b8b9be, -4px -4px 8px #ffffff";
          el.style.boxShadow = "none";
        });

        text.forEach(txt => { 
          txt.style.color = "var(--light-text)";
        });
        
        darkImg.setAttribute("src", "img/daylight.png");
        modeIcon.classList.remove('lni-moon-half-right-5'); 
        modeIcon.classList.add('lni-sun-1');
        
    }
});

const showModal = document.querySelector(".about-link"); 
const showModal_phone = document.querySelector(".about-link-phone");
const modal = document.querySelector(".modal-container");

// Show modal on click
showModal.addEventListener("click", showingModal);
showModal_phone.addEventListener("click", showingModalphone);

function showingModal(event) {
  event.stopPropagation(); 
  modal.classList.add("modal-show"); 
}

function showingModalphone(event) {
  event.stopPropagation(); 
  modal.classList.add("modal-show"); 
}

// Close modal when clicking outside
document.addEventListener("click", (event) => {
  if (!modal.contains(event.target) && !showModal.contains(event.target) && !showModal_phone.contains(event.target)) {
    modal.classList.remove("modal-show");
  }
});

// Prevent modal close when clicking inside the modal
modal.addEventListener("click", (event) => {
  event.stopPropagation();
});

