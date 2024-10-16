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
