const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav_list');


menuIcon.onclick =() =>{
    navLinks.classList.toggle('active')
}

// Get all read more buttons
const readMoreButtons = document.querySelectorAll('.read-more');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Open the modal and prevent scrolling
readMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';  // Disable scrolling
    });
});

// Close the modal when 'x' is clicked and allow scrolling again
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
        document.body.style.overflow = 'auto';  // Enable scrolling
    });
});

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';  // Enable scrolling
        }
    });
};
// Function to detect if the element is in the viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollFlip() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const frontImage = container.querySelector('.front-img');
        const backImage = container.querySelector('.back-img');

        if (isInViewport(container)) {
            frontImage.style.transform = 'rotateY(0deg)';
            backImage.style.transform = 'rotateY(180deg)';

            setTimeout(() => {
                frontImage.style.transform = 'rotateY(180deg)';
                backImage.style.transform = 'rotateY(360deg)';
            }, 2000);

            setTimeout(() => {
                frontImage.style.transform = 'rotateY(0deg)';
                backImage.style.transform = 'rotateY(180deg)';
            }, 7000);
        }
    });
}


window.addEventListener('scroll', handleScrollFlip);

document.addEventListener('DOMContentLoaded', handleScrollFlip);
