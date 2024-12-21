// Features Dropdown Menu (Placeholder if dynamic functionality is added)
document.querySelector('.features-dropdown').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Features dropdown clicked!');
});

// Smooth Scroll for "Join Now" button in Hero Section
document.querySelector('.hero .btn').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: document.querySelector('.steps').offsetTop,
        behavior: 'smooth'
    });
});

// Support Form Submission
const form = document.querySelector('.support form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});
