// DOM elements
const sbtn = document.querySelector(".socials-btn");
const socials = document.querySelector(".socials");
const profile = document.querySelector(".profile");
const author = document.querySelector(".author");

// Configuration
const MOBILE_BREAKPOINT = 768;

// State
let isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

// Event listeners
sbtn.addEventListener("click", toggleSocials);
window.addEventListener("resize", debounce(handleResize, 1));
window.addEventListener("load", initializeLayout);
resetToDefault();

// Functions
function toggleSocials() {
    author.classList.toggle("author-active");
    socials.classList.toggle("d-none");

    if (isMobile) {
        profile.classList.toggle("d-none");
        author.classList.toggle("author-mob-active");
    } else {
        profile.classList.remove("d-none");
    }
}

function resetToDefault() {
    author.classList.remove("author-active");
    profile.classList.remove("d-none");
    socials.classList.add("d-none");
}

function handleResize() {
    const waseMobile = isMobile;
    isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

    if (waseMobile !== isMobile) {
        resetToDefault();
        setLayoutForCurrentState();
        author.classList.remove("author-mob-active");
    }
}

function setLayoutForCurrentState() {
    if (isMobile) { // Mobile layout
        if (author.classList.contains("author-active")) {
            profile.classList.add("d-none");
            socials.classList.remove("d-none");
        } else {
            profile.classList.remove("d-none");
            socials.classList.add("d-none");
        }
    } else { // Desktop layout
        profile.classList.remove("d-none");
        if (!author.classList.contains("author-active")) {
            socials.classList.add("d-none");
        }
    }
}

function initializeLayout() {
    setLayoutForCurrentState();
}

// Utility function to debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize
initializeLayout();