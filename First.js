// Scroll to top when clicking footer "Back to Top"
document.querySelector('.footer-panel1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Alert when clicking search icon
document.querySelector('.search-icon').addEventListener('click', () => {
    const searchInput = document.querySelector('.search-input').value.trim();
    if (searchInput === '') {
        alert("Please enter something to search.");
    } else {
        alert(`You searched for: ${searchInput}`);
    }
});

// Log which product box was clicked
document.querySelectorAll('.box').forEach((box, index) => {
    box.addEventListener('click', () => {
        const title = box.querySelector('h2').innerText;
        console.log(`Clicked on box ${index + 1}: ${title}`);
    });
});
