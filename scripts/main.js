document.addEventListener('DOMContentLoaded', function() {
    console.log('WeatherWise landing page loaded.');
});

function openVideoModal() {
    document.getElementById("videoModal").style.display = "block";
}

function closeVideoModal() {
    document.getElementById("videoModal").style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Smooth scrolling for navigation links with offset for fixed header
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Calculate the offset
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
