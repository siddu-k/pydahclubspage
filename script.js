function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

const roles = ["Editor  ", "UI/UX Designer  ", "Developer  ", "Gamer  ", "Designer  "];
let currentRole = 0;
let roleIndex = 0; // Index to track the current character in the role
let typingSpeed = 150; // Speed of typing effect in milliseconds
let deleteSpeed = 50; // Speed of deleting effect in milliseconds
let isDeleting = false; // Flag to check if we're deleting

function changeRole() {
    const roleElement = document.getElementById("role");
    
    // If we are deleting
    if (isDeleting) {
        // Remove one character
        roleElement.textContent = roles[currentRole].substring(0, roleIndex--);
        
        // If we've removed all characters, switch to the next role
        if (roleIndex < 0) {
            isDeleting = false;
            currentRole = (currentRole + 1) % roles.length; // Cycle through roles array
            roleIndex = 0; // Reset index for the next role
        }
    } else {
        // Add one character
        roleElement.textContent = roles[currentRole].substring(0, roleIndex++);
        
        // If we've reached the end of the role, start deleting after a pause
        if (roleIndex > roles[currentRole].length) {
            isDeleting = true;
            setTimeout(changeRole, 1000); // Pause before starting to delete
            return;
        }
    }
    
    // Continue typing or deleting
    setTimeout(changeRole, isDeleting ? deleteSpeed : typingSpeed);
}

// Start the typewriter effect
changeRole();


     // Function to open the modal
     function openModal() {
        document.getElementById("modalOverlay").style.display = "flex";
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById("modalOverlay").style.display = "none";
    }


    

function setInitialTheme() {
    const isBlackTheme = document.getElementById('themeToggle').checked;
    if (isBlackTheme) {
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'white');
    } else {
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--text-color', 'black');
    }
}

function toggleTheme() {
    const isBlackTheme = document.getElementById('themeToggle').checked;
    if (isBlackTheme) {
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'white');
    } else {
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--text-color', 'black');
    }
}

// Set the initial theme when the page loads
document.addEventListener('DOMContentLoaded', setInitialTheme);
